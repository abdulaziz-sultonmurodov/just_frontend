import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/locations.css'

const Locations = () => {
    return (
        <>
        <div className='flex justify-between align-start flex-wrap mx-40'>

            <div className='locations-responsive flex-col justify-evenly align-start w-percent-30 mb-50'>
                <img className='w-percent-100 h-300' src='https://avatars.mds.yandex.net/get-altay/1908863/2a0000016ebbe7a8cd1e193f0b0ff423b9c2/XXL' alt='' />
            <div>
                <p className='darkGrey mt-20 mb-0 font-22'>Samarqand Darvoza</p>
                <p className='lightGrey mb-20 mt-5 uppercase text-spacing font-13'>Tashkent</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Manzil: </span> Samarqand Darvoza</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Tel: </span> +998 97 443 00 26</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Ish Vaqti: </span> DUSHANBA-SHANBA, 10:00-18-00</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Dam olish kuni: </span> YAKSHANBA</p>
            </div>
            <div className='mt-20'>
                <Link className='lighterGrey text-decoration-none  hover-black' to='/locations/yakkasaroy'><span className='border-bottom-1 border-lighter-grey '>Batafsil</span></Link>
            </div>
            </div>
           
            <div className='locations-responsive flex-col justify-evenly align-start w-percent-30 mb-50'>
                <img className='w-percent-100 h-300' src='https://avatars.mds.yandex.net/get-altay/2385630/2a0000017036c743aa6e573e2714c777efe0/XXL' alt='' />
            <div>
                <p className='darkGrey mt-20 mb-0 font-22'>Samarqand Darvoza</p>
                <p className='lightGrey mb-20 mt-5 uppercase text-spacing font-13'>Tashkent</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Manzil: </span> Samarqand Darvoza</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Tel: </span> +998 97 443 00 26</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Ish Vaqti: </span> DUSHANBA-SHANBA, 10:00-18-00</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Dam olish kuni: </span> YAKSHANBA</p>
            </div>
            <div className='mt-20'>
                <Link className='lighterGrey text-decoration-none  hover-black' to='/locations/yakkasaroy'><span className='border-bottom-1 border-lighter-grey '>Batafsil</span></Link>
            </div>
            </div>

            <div className='locations-responsive flex-col justify-evenly align-start w-percent-30 mb-50'>
                <img className='w-percent-100 h-300' src='https://avatars.mds.yandex.net/get-altay/1908863/2a0000016ebbe7a8cd1e193f0b0ff423b9c2/XXL' alt='' />
            <div>
                <p className='darkGrey mt-20 mb-0 font-22'>Samarqand Darvoza</p>
                <p className='lightGrey mb-20 mt-5 uppercase text-spacing font-13'>Tashkent</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Manzil: </span> Samarqand Darvoza</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Tel: </span> +998 97 443 00 26</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Ish Vaqti: </span> DUSHANBA-SHANBA, 10:00-18-00</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Dam olish kuni: </span> YAKSHANBA</p>
            </div>
            <div className='mt-20'>
                <Link className='lighterGrey text-decoration-none  hover-black' to='/locations/yakkasaroy'><span className='border-bottom-1 border-lighter-grey '>Batafsil</span></Link>
            </div>
            </div>

            <div className='locations-responsive flex-col justify-evenly align-start w-percent-30 mb-50'>
                <img className='w-percent-100 h-300' src='https://avatars.mds.yandex.net/get-altay/1908863/2a0000016ebbe7a8cd1e193f0b0ff423b9c2/XXL' alt='' />
            <div>
                <p className='darkGrey mt-20 mb-0 font-22'>Samarqand Darvoza</p>
                <p className='lightGrey mb-20 mt-5 uppercase text-spacing font-13'>Tashkent</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Manzil: </span> Samarqand Darvoza</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Tel: </span> +998 97 443 00 26</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Ish Vaqti: </span> DUSHANBA-SHANBA, 10:00-18-00</p>
                <p className='darkGrey my-5'><span className='text-weight-900'>Dam olish kuni: </span> YAKSHANBA</p>
            </div>
            <div className='mt-20'>
                <Link className='lighterGrey text-decoration-none  hover-black' to='/locations/yakkasaroy'><span className='border-bottom-1 border-lighter-grey '>Batafsil</span></Link>
            </div>
            </div>
             

        </div>   
        </>
    )
}

export default Locations
