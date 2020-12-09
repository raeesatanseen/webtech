import React, { Component } from 'react';
import NormalInput from '../../../components/UI/NormalInput';


const AddressForm = props =>  {

        const {address} = props;
     

        return (
            <form onSubmit={props.addressSubmitHandler}>
                 <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="fullName"
                                value={address.fullName}
                                placeholder={'Full Name'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="mobileNumber"
                                value={address.mobileNumber}
                                placeholder={'10-digit Mobile Number'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
                    {}

                    <div className="Row">
                        <button className="DeliveryAddressButton">SAVE TICKET RECIPIENT</button>
                    </div>

            </form>
           
        );
    
    
}

export default AddressForm;