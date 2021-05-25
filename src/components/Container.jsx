
import React, {Component} from 'react';
import RobotCard from './RobotCard';


const Container = (props) => {

    return (
        <div className="container">
            {
                props.dataToPlot.map((user) => {
                    return <RobotCard key={user.id} userID={user.id} name={user.name} email={user.email} handleCardMenu={props.handleCardMenu}/>
                })
            }
        </div>
    );
}

export default Container;
