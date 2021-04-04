import React from 'react'
import { IoShirtSharp } from "react-icons/io5";
import { GiAmpleDress, GiConverseShoe, GiPoloShirt, GiShorts, GiUnderwearShorts } from "react-icons/gi"
import { FaSocks } from "react-icons/fa"
import '../styles/category.css'

const Category = () => {
    return (
        <>

        <div className="categoryContainer m-50 flex justify-start flex-wrap align-center">
            <a className='text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20' href="#">
            <div className='flex-col text-center text-spacing uppercase'>
                <IoShirtSharp className='font-19' />
                <p className='font-15'>T-shirts</p>
            </div>
            </a>
            <a className='text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20' href="#">
            <div className='flex-col text-center text-spacing uppercase'>
                <GiAmpleDress className='font-19' />
                <p className='font-15'> Dress</p>
            </div>
            </a>
            <a className='text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20' href="#">
            <div className='flex-col text-center text-spacing uppercase'>
                <GiConverseShoe className='font-19' />
                <p className='font-15'> Shoes</p>
            </div>
            </a>
            <a className='text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20' href="#">
            <div className='flex-col text-center text-spacing uppercase'>
                <FaSocks className='font-19' />
                <p className='font-15'> Socks</p>
            </div>
            </a>
            <a className='text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20' href="#">
            <div className='flex-col text-center text-spacing uppercase'>
                <GiPoloShirt className='font-19' />
                <p className='font-15'> Polo</p>
            </div>
            </a>
            <a className='text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20' href="#">
            <div className='flex-col text-center text-spacing uppercase'>
                <GiShorts className='font-19' />
                <p className='font-15'> Shorts</p>
            </div>
            </a>
            <a className='text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20' href="#">
            <div className='flex-col text-center text-spacing uppercase'>
                <GiUnderwearShorts className='font-19' />
                <p className='font-15'> Underwear</p>
            </div>
            </a>

        </div>

        </>
    )
}

export default Category
