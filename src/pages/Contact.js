import React from 'react'
import 'primeicons/primeicons.css';

export default function Contact(){

    return(
        <>
        <div className='about'> 
        <div  className='about-text text-8xl font-bold text-white flex justify-content-center'>Contact</div>  
        </div>

        <div className='grid flex justify-content-around'>

        <div className='lg:col-6 col-12'>
            <h2>Get In Touch</h2>
        </div>

        <div className='lg:col-6 col-12'>
            <h2>Our Address</h2>
            <p><i className="pi pi-phone bg-primary p-1 mr-2"></i>2130 Fulton Street, San Diego, CA 94117-1080 USA</p>
            <p><i className="pi pi-phone bg-primary p-1 mr-2"></i>1-800-1234-567</p>
            <p><i className="pi pi-envelope bg-black-alpha-50 p-1 mr-2"></i> info@demolink.org</p>
        </div>
        </div>
        </>
    )
}