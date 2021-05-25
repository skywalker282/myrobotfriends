
import React from 'react';

const ModifyModal = props => {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.dismissModifyModal()
        let robotObject = {}
        Array.from(event.target.elements).map(input => {
            if(input.name !=="") {
                robotObject[input.name] = input.value;
            }
        });
        props.handleSubmit(robotObject, props.ID);

    }

    return (
        <div className="overlay-modify" onClick={(event) => {event.stopPropagation(); props.dismissModifyModal()}}>
            <div className="modal-form" onClick= {event => {event.stopPropagation()}}>
                <h3>Mise à jour du robot {props.robotName}</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Le nom du robot"/>
                    <input type="text" name="email" placeholder="Votre e-mail"/>
                    <input type="text" name="website" placeholder="Votre site web"/>
                    <input type="submit" value="Modifier"/>
                </form>
            </div>
        </div>
    );
}

export default ModifyModal;
