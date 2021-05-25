
import React from 'react';

const AddForm = props => {

    let robotObject = {};

    const handleSubmit = event => {
        event.preventDefault();
        Array.from(event.target.elements).map(input => {
            if (input.name !== "") {
            robotObject[input.name] = input.value;
            }
        });
        props.handleSubmit(robotObject);
    }
    return(
        <div className="overlay-form" onClick={(event) => {event.stopPropagation(); props.dismissAddModal()}}>
            <div className="modal-form" onClick= {event => {event.stopPropagation()}}>
                <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Le nom du robot"/>
                <input type="text" name="email" placeholder="Votre e-mail"/>
                <input type="text" name="website" placeholder="Votre site web"/>
                <input type="submit" value="Ajouter"/>
            </form>
        </div>
        </div>
    );
} 

export default AddForm;