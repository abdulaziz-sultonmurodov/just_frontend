import React from 'react'
import { Link } from 'react-router-dom'
import { RiRoadMapLine } from "react-icons/ri";

const ContactPage = () => {
    return (
        <>
            
        <div className='flex justify-center align-start'>
            <div className='w-percent-60'>
                <img className='w-percent-90' src='https://avatars.mds.yandex.net/get-altay/1779701/2a0000016bbc9a9d6cdba0f05235cc94a616/XXXL' alt='' />
            </div>
            <div className='flex-col w-percent-30'>
            <div className='border-bottom-2 border-lighter-grey'>
                <p className='lighterGrey uppercase'>Contact us</p>
                <p className='darkGrey font-17'>If you have any questions, please do not hesitate to send us a message</p>
            </div>
            <div>
                <p className='darkGrey'>Tashkent</p>
                <p className='darkGrey'><span className=' text-weight-900'> Manzil: </span> SAMARQAND DARVOZA</p>
                <p className='darkGrey'><span className=' text-weight-900'> Tel: </span> +998 97 443 00 26</p>
                <p className='darkGrey'><span className=' text-weight-900'> Ish Vaqti: </span> DUSHANBA-SHANBA, 10:00-18-00</p> 
                <p className='darkGrey'><span className=' text-weight-900'> Dam olish kuni: </span> YAKSHANBA</p> 
                <div>
                <Link className='lighterGrey text-decoration-none  hover-black flex align-end' to='/locations'><span className='border-bottom-1 border-lighter-grey '>Visit our locations</span> <RiRoadMapLine className='font-22 ml-10' /></Link>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}

export default ContactPage
