import { Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import imageBase from '../../assets/images/baseImage.jpg';
import './BaseImage.scss';

function BaseImage() {
    const [preview, setPreview] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreview(false)
        }, 2000)
    }, [])

    const handleChange=()=>{
        setPreview(oldState=>!oldState)
    }

    return <div className={`baseImageContainer ${preview ? 'previewSection' : ''}`}>
        {preview && <img src={imageBase} alt='base design' />}
        <div className='togglerContainer'>
            <Switch
                checked={!preview}
                onChange={handleChange}
            />
        </div>
    </div>;
}

export default BaseImage;
