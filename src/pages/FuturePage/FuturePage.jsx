import React from 'react';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import './FuturePage.scss';

function FuturePage({ title }) {
    return <div className='futurePageContainer'>
        <WhiteCard>
            <div className='titleSection'>{title}</div>
        </WhiteCard>
        <div className='imageContainer'>
       <div className='imageHolder'/>
       </div>
    </div>;
}

export default FuturePage;
