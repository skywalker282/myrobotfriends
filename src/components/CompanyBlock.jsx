
import React from 'react';

function CompanyBlock(props) {
    let {name, catchPhrase, bs} = props.companyIdentity;

    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{catchPhrase}</p>
                <p>{bs}</p>
            </div>
        </div>
    );
}

export default CompanyBlock;
