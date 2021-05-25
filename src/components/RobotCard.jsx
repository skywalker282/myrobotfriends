
import React, {Component} from 'react';

import ImageBlock from './ImageBlock';
import NameBlock from './NameBlock';
import EmailBlock from './EmailBlock';
import RobotModalMenu from './RobotModalMenu';
import { useState } from 'react';

const RobotCard = (props) => {
    let [modalMenuVisible, setModalMenuVisible] =useState(false);

    const handleCardClick = () => {
        setModalMenuVisible(true);
    }
    const handleMenuItemClick = () => {
        setModalMenuVisible(false);
    }
    const handleMenu = (option, ID) => {
        props.handleCardMenu(option, ID);
    }

    let imgSrc = 'https://robohash.org/' + props.userID;
    return (
        <div className="card" onClick={()=>{handleCardClick()}}>
            <ImageBlock imgSrc = {imgSrc} />
            <NameBlock name = {props.name} />
            <EmailBlock email= {props.email} />
            {
                ((context) => {
                    if(context) {
                        return(
                            <RobotModalMenu handleItem={handleMenu} handleDismiss={ handleMenuItemClick} userID={props.userID}/>
                        );
                    }
                })(modalMenuVisible)
            }
        </div>
    );
}

export default RobotCard;