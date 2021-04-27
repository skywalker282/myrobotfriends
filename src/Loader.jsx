import React from 'react';
import preloader from './preloader.svg';

const Loader = () => {
    return (
        <div className="loader">
            <div>
                <img src={preloader} alt="loading"/>
            </div>
            <p>Chargement en cours ...</p>
        </div>
    )
}

export default Loader