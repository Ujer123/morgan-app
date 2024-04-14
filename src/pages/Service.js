import React from 'react'
import potrait1 from '../assets/services-1.jpg';
import potrait2 from '../assets/portrait-2.jpg';
import potrait3 from '../assets/portrait-3.jpg';
import potrait4 from '../assets/portrait-4.jpg';
import potrait5 from '../assets/portrait-5.jpg';
import { Button } from 'primereact/button';

export default function Service(){

    return(
        <>
        <div className='about'>
            <div  className='about-text text-8xl font-bold text-white flex justify-content-center'>Services</div>
            
        </div>

        {/* <div className='lg:p-8 pt-6'> */}
        <div className='lg:grid lg:flex lg:p-8 pt-6'>
            <div className='lg:col-6'>
            <img alt="home" src={potrait1} className='border-round-3xl max-w-full px-4 lg:px-0' />
            </div>
            <div className='lg:col-6'>
            <h2 className='pl-5  text-5xl font-medium'>A Few Words About Us</h2>
                <h2 className='text-xl font-normal px-5'>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it's created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.</h2>
            <Button label="Learn More" severity="warning" className='border-round-3xl mx-5' outlined/>
            </div>
        </div>

        {/* </div> */}

        <div class="lg:grid lg:flex nested-grid lg:px-8 pt-6">
    <div class="lg:col-6">
    <img alt="home" src={potrait2} className='border-round-3xl max-w-full px-4 lg:px-0'/>
    </div>
    <div class="lg:col-6">
        <div class="lg:grid">
            <div class="col-12">
                <img src={potrait3} alt='potrait3' className='max-w-full border-round-3xl px-4 lg:px-0'/>
            </div>
            
            <div class="col-12">
                <div className='text-right px-4 lg:px-0'>
                    <h2 className='text-orange-500'>Oil on Canvas of a Little Girl</h2>
                    <p>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
                </div>
            </div>
        </div>
    </div>
</div>

        <div class="lg:grid lg:flex nested-grid lg:px-8 pt-6">
    <div class="lg:col-6">
        <div class="lg:grid">
            <div class="col-12">
                <img src={potrait4} alt='potrait3' className='max-w-full border-round-3xl px-4 lg:px-0'/>
            </div>
            
            <div class="col-12">
                <div className='text-right px-4 lg:px-0'>
                    <h2 className='text-orange-500 '>Oil on Canvas of a Little Girl</h2>
                    <p>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:col-6">
    <img alt="home" src={potrait5} className='border-round-3xl max-w-full px-4 lg:px-0'/>
    </div>
</div>
        </>
    )
}