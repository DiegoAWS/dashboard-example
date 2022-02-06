import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import './FuturePage.scss';

function FuturePage({ title }) {
    let navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/report/1");
        }, 2000);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className='futurePageContainer'>
        <WhiteCard>
            <div className='titleSection'>{title}</div>
        </WhiteCard>
        <div className='imageContainer'>
            <div className='imageHolder' />
        </div>
    </div>;
}

export default FuturePage;
