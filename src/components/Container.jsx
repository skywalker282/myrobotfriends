
import React, {Component} from 'react';
import RobotCard from './RobotCard';


const Container = (props) => {

    return (
        <div className="container">
            {
                props.dataToPlot.map((user) => {
                    return <RobotCard key={user.id} userID={user.id} name={user.name} email={user.email} showModal={props.showModal}/>
                })
            }
        </div>
    );
}

export default Container;
