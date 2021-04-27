
import React from 'react';

function WebsiteBlock(props) {
    let website = props.userWebsite;

    return (
        <p>{website}</p>
    );
};

export default WebsiteBlock;
