import React from 'react'
import "./registrationPage.css"
import QRImage from "../../assets/registrationPage/prakalpa2025QR.png"

const RegistrationPage = () => {
    return (
        <div className='registrationPageContainer'>
            <img className='qrImage'
                src={QRImage}
            />
        </div>
    )
}

export default RegistrationPage
