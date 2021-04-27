
import React, {Component} from 'react';

import ImageBlock from './ImageBlock';
import NameBlock from './NameBlock';
import EmailBlock from './EmailBlock';

const RobotCard = (props) => {
    let imgSrc = 'https://robohash.org/' + props.userID;
    return (
        <div className="card" onClick={()=>props.showModal(props.userID)}>
            <ImageBlock imgSrc = {imgSrc} />
            <NameBlock name = {props.name} />
            <EmailBlock email= {props.email} />
        </div>
    );
}

export default RobotCard;