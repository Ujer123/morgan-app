import React from 'react'
import { Button } from 'primereact/button';
import still from '../assets/still-life-1.jpg';
// import about from '../assets/bg-image.jpg';

export default function About(){

     


    return(
        <>
        <div className='about'> 
        <div  className='about-text text-8xl font-bold text-white flex justify-content-center'>About</div>  
        </div>
        
        <div className='lg:p-8'>

        <div className='lg:grid lg:flex'>
            <div className='lg:col-6'>
        <h2 className='pl-8 text-5xl font-medium'>A Few Words About Us</h2>
                <h2 className='text-xl font-normal px-5'>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it's created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.</h2>
            <Button label="Learn More" severity="warning" className='border-round-3xl mx-5' outlined/>
            </div>
            <div className='lg:col-5 m-5'>
            <img alt="home" src={still} className='border-round-lg  max-w-full' />
            </div>
        </div>

        </div>


        </>
    )
}