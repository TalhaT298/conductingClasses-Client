import React from 'react';
import { useParams } from 'react-router-dom';

const VideoConferance = () => {
    const {id}=useParams();
    return (
        <div className='py-20'>
            <div>videopage {id}</div>
        </div>
    );
};

export default VideoConferance;