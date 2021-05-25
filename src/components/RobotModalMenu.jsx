
import React from 'react';

const RobotModalMenu = props => {
    return (
        <div className="overlay-menu" onClick={(event) => {event.stopPropagation(); props.handleDismiss()}}>
            <ul>
                <li  onClick={() => {props.handleItem('detail', props.userID); props.handleDismiss()}}>Détails</li>
                <li  onClick={() => {props.handleItem('modify', props.userID); props.handleDismiss()}}>Modifier</li>
                <li  onClick={() => {props.handleItem('delete', props.userID); props.handleDismiss()}}>Supprimer</li>
            </ul>
        </div>
    );
}

export default RobotModalMenu;
