
import React from 'react';

const AddRobot = props => {
    return (
        <a onClick={props.handleAddRobotClick}>ADD ROBOT <i className="material-icons">add</i></a>
    );
}

export default AddRobot;