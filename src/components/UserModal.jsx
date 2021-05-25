
import React, { useState } from 'react';
import Name from './NameBlock';
import Email from './EmailBlock';
import Image from './ImageBlock';
import Address from './UserAdress';
import Phone from './PhoneBlock';
import Company from './CompanyBlock';
import Website from './WebsiteBlock';
import arrowBack from './back-arrow.svg'
import { useEffect } from 'react';
import Loader from '../Loader';

const UserModal = (props) => {

    let imgPaceholder = 'https://robohash.org/';

    let [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        fetch("http://localhost:8800/api/robot-users/" + props.ID)
            .then(data => {
                return data.json();
            })
            .then(user => {
                setUserInfo(user)
            })
    })

    if(userInfo !== '') {
        return (
            <div className="modal">
                <div className="user-modal">
                <div className='return-btn' onClick={props.removeModal}>
                    <img src={arrowBack} /> 
                </div>
                <div className="info-block">
                    <div className="image-block">
                        <Image imgSrc={imgPaceholder + props.ID}/>
                    </div>
                    <div className="robot-credentials">
                        <div>
                            <h3>User name</h3>
                            <Name name={userInfo.name}/>
                        </div>
                        <div className="email-block">
                            <h3>User email address</h3>
                            <Email email={userInfo.email}/>
                        </div>
                        <div className="phone-block">
                            <h3>User pnone number:</h3>
                            <Phone phoneNumber={userInfo.phone}/>
                        </div>
                        <div className="address-block">
                            <h3>User complete address:</h3>
                            <Address address={userInfo.address}/>
                        </div>
                        <div className="companyBlock">
                            <h3>Company details:</h3>
                            <Company companyIdentity={userInfo.company}/>
                        </div>
                        <div className="website-block">
                            <h3>User website:</h3>
                            <Website userWebsite={userInfo.website}/>
                        </div>
                    </div>
                </div>
    
            </div>
            </div>
        );
    }
    else {
        return (
            <Loader />
        )
    }
}

export default UserModal;
