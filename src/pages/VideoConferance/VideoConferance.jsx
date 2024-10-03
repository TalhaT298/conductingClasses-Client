import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoConferance = () => {
    const {id}=useParams();
    return (
        <div className='py-20'>
            <div>videopage {id}</div>
        </div>
    );
};

export default VideoConferance;