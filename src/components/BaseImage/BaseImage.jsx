import { Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import imageBase from '../../assets/images/baseImage.jpg';
import Portal from '@mui/base/Portal';
import './BaseImage.scss';

function BaseImage() {
    const [preview, setPreview] = useState(true);

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
        <Portal>
            <div className='togglerContainer'>
                <Switch
                    checked={preview}
                    onChange={handleChange}
                />
            </div>
        </Portal>
    </div>;
}

export default BaseImage;
