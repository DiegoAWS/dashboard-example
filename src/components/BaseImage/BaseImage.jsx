import { Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import imageBase from '../../assets/images/baseImage.jpg';
import './BaseImage.scss';

function BaseImage() {
    const [preview, setPreview] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (preview) {
                setPreview(false)
            }
        }, 2000)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = () => {
        setPreview(oldState => !oldState)
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
