import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';

const SOCKET_SERVER_URL = 'http://localhost:5000'; // Update this with your server URL

const VideoConferance = () => {
  const [stream, setStream] = useState(null);
  const [peers, setPeers] = useState({});
  const userVideo = useRef();
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        userVideo.current.srcObject = currentStream;
        setStream(currentStream);

        socketRef.current.emit('join room', 'room1'); // Replace 'room1' with your room identifier
      });

    socketRef.current.on('all users', (users) => {
      const peerList = {};
      users.forEach((userId) => {
        const peer = createPeer(userId, socketRef.current.id);
        peerList[userId] = peer;
      });
      setPeers(peerList);
    });

    socketRef.current.on('user joined', (userId) => {
      const peer = addPeer(userId, socketRef.current.id);
      setPeers((prev) => ({ ...prev, [userId]: peer }));
    });

    socketRef.current.on('receive signal', ({ from, signal }) => {
      setPeers((prev) => {
        const peer = prev[from];
        peer.signal(signal);
        return prev;
      });
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const createPeer = (userId, callerId) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (signal) => {
      socketRef.current.emit('send signal', { userId, callerId, signal });
    });

    return peer;
  };

  const addPeer = (incomingSignal, callerId) => {
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (signal) => {
      socketRef.current.emit('send signal', { userId: callerId, signal });
    });

    peer.signal(incomingSignal);
    return peer;
  };

  return (
    <div>
      <h1>Video Conferencing</h1>
      <video playsInline muted ref={userVideo} autoPlay style={{ width: '300px' }} />
      {/* Render peers' video */}
      {Object.keys(peers).map((userId) => (
        <Video key={userId} peer={peers[userId]} />
      ))}
    </div>
  );
};

const Video = ({ peer }) => {
  const ref = useRef();

  useEffect(() => {
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, [peer]);

  return <video playsInline autoPlay ref={ref} style={{ width: '300px' }} />;
};

export default VideoConferance;
