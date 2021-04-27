

import React from 'react';

function UserAddress(props) {
    console.log(props.address);
    let {street, suite, city, zipcode} = props.address;

    return(
        <>
            <address className="addres-credentials">
                <p>Street: {street}</p>
                <p>Suite: {suite}</p>
                <p>City: {city}</p>
                <p>Zip Code: {zipcode}</p>
            </address>
        </>
    );
};

export default UserAddress;