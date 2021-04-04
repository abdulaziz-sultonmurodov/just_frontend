import React from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin } from "react-icons/fi";
import { RiRoadMapLine } from "react-icons/ri";
import '../../styles/locations.css'

const Yakkasaroy = () => {
    return (
        <>
             <div className='flex justify-center align-start flex-wrap mx-20'>

            <div className='location-responsive flex-col w-percent-30'>
            <div>
                <p className='black font-22 mb-0'>Samarqand Darvoza</p>
                <p className='lightGrey mb-20 mt-5 uppercase text-spacing font-13'>Tashkent</p>
                <p className='darkGrey my-5'><span className=' text-weight-900'> Manzil: </span> Samarqand Darvoza</p> 
                <p className='darkGrey my-5'><span className=' text-weight-900'> Tel: </span> +998 97 443 00 26</p>
                <p className='darkGrey my-5'><span className=' text-weight-900'> Ish Vaqti: </span> DUSHANBA-SHANBA, 10:00-18-00</p>
                <p className='darkGrey my-5'><span className=' text-weight-900'> Dam olish kuni: </span> YAKSHANBA</p>
                <div className='my-20 font-19'>
                <Link className='lightGrey text-decoration-none  hover-black' to='/locations'><span>Kartada Ko'rish</span> <FiMapPin /></Link>
                </div>
                <div className='my-50'>
                <Link className='lighterGrey text-decoration-none  hover-black flex' to='/locations'><span className='border-bottom-1 border-lighter-grey font-15 '>Boshqa Manzillar</span><RiRoadMapLine className='font-22 ml-10' /></Link>
                </div>
            </div>
            </div>
            <div className='location-responsive w-percent-60'>
                <img className='w-percent-90 ' src='https://avatars.mds.yandex.net/get-altay/1908863/2a0000016ebbe7a8cd1e193f0b0ff423b9c2/XXL' alt='' />
            </div>
        </div>

        <div className='flex flex-wrap justify-between align-center mx-50 my-50'>

            <div className='location-responsive w-percent-50 mb-50'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus quos ducimus eum mollitia adipisci ad vero eveniet quam, ut pariatur porro expedita similique quia earum saepe ipsa iste numquam sapiente corrupti dolorum! Illum, nostrum! Veniam sapiente at voluptatum, sint cumque iure libero eligendi tempora maiores aperiam dolore porro exercitationem tenetur ipsum sequi ducimus ullam totam natus dolor voluptatem. Perferendis doloremque minima dolorum non architecto maiores vero ex itaque animi iste earum temporibus quidem atque suscipit, et, placeat sed adipisci. Animi, eaque fugiat dolore repudiandae aperiam, culpa praesentium nobis, repellat debitis illum dolor dolorum accusamus corporis facere magnam deleniti maxime!</p>
                <ul className='my-30'>
                    <p className='lightGrey mb-5'>Lorem, ipsum.</p>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat.</li>
                </ul>
                <ul className='my-30'>
                    <p className='lightGrey mb-5'>Lorem, ipsum.</p>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat.</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt doloremque dolorem ipsum delectus enim quaerat cum repellat aspernatur officia natus itaque, nihil corporis obcaecati, sequi sapiente facere, perferendis possimus. Rerum consequuntur quo praesentium, officia ducimus aliquid voluptas dolorum! Neque officiis dolore autem, harum sit qui repellendus sint sapiente magni fuga aliquid labore veritatis ab excepturi expedita amet in numquam iure ullam cupiditate ipsum? Suscipit dolorem fugiat quidem sed, nulla repellendus inventore corporis aliquam quae sint, libero, nostrum aliquid deleniti.</p>
            </div>
            <div className='location-responsive w-percent-40'>
            <img className='w-percent-100' src='https://avatars.mds.yandex.net/get-altay/1908863/2a0000016ebbe7a8cd1e193f0b0ff423b9c2/XXL' alt='' />
            </div>
        </div>

        <div className='flex justify-center flex-wrap align-start mx-10 my-50'>
            <img className='location-responsive w-percent-45 mx-10 my-20' src='https://avatars.mds.yandex.net/get-altay/1908863/2a0000016ebbe7a8cd1e193f0b0ff423b9c2/XXL' alt='' />
            <img className='location-responsive w-percent-45 mx-10 my-20' src='https://avatars.mds.yandex.net/get-altay/1908863/2a0000016ebbe7a8cd1e193f0b0ff423b9c2/XXL' alt='' />
        </div>

        </>
    )
}

export default Yakkasaroy
