
import React from 'react';
import Name from './NameBlock';
import Email from './EmailBlock';
import Image from './ImageBlock';
import Address from './UserAdress';
import Phone from './PhoneBlock';
import Company from './CompanyBlock';
import Website from './WebsiteBlock';
import arrowBack from './back-arrow.svg'

let UserModal = (props) => {
    let userData = {...props.userData[0]}
    console.log(userData);
    let { id, address, company, email, name, phone, website } = userData;

    let imgPaceholder = 'https://robohash.org/';

    return (
        <div className="user-modal">
            <div className='return-btn' onClick={props.removeModal}>
                <img src={arrowBack} /> 
            </div>
            <div className="info-block">
                <div className="image-block">
                    <Image imgSrc={imgPaceholder + id}/>
                </div>
                <div className="robot-credentials">
                    <div className="cred-1">
                        <div>
                            <h3>User name</h3>
                            <Name name={name}/>
                        </div>
                        <div className="email-block">
                            <h3>User email address</h3>
                            <Email email={email}/>
                        </div>
                        <div className="phone-block">
                            <h3>User pnone number:</h3>
                            <Phone phoneNumber={phone}/>
                        </div>
                    </div>
                    <div className="cred-2">
                        <div className="address-block">
                            <h3>User complete address:</h3>
                            <Address address={address}/>
                        </div>
                        <div className="companyBlock">
                            <h3>Company details:</h3>
                            <Company companyIdentity={company}/>
                        </div>
                        <div className="website-block">
                            <h3>User website:</h3>
                            <Website userWebsite={website}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserModal;
