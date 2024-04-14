
import React from 'react';
// import cover from '../assets/bg.jpg';
import company from '../assets/brand-inverse.png';
import home from '../assets/home.jpg';
import { Button } from 'primereact/button';
import Shopping from '../components/Shopping';
import leaf from '../assets/leaf.png';
import user from '../assets/user.png';
import apple from '../assets/apple-logo.png';
import house from '../assets/house.png';


        
        

export default function Home() {

    

    return (
        <div className='py-5 '>
        <section className=''>
        <div className='container-fluid '>
            <div className='row'>
                <div className='home-check'>
                {/* <img src={cover} className='img-fluid w-100' ></img> */}
                <img alt="logo" src={company} className='company' />
                </div>
            </div>
        </div>
        </section>

        {/* <section className='lg:mx-8 sm:mx-0'> */}
            {/* <div className='container'> */}
                {/* <div className='row'> */}
                    <div className='grid mr-2'>
                    <div className='lg:col-6 mx-5'>
                    <h2 className='text-5xl mx-5'>A Few Words About Me</h2>
                        <p className='max-w-full mx-5 text-lg'>My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
                        <Button label="Learn More" severity="warning" className='border-round-3xl mx-5' outlined/>
                    </div>
                    <div className='lg:col-4 mx-5'>
                    <img alt="home" src={home} className='border-round-3xl  pt-3 max-w-full' />
                    </div>
                </div>
            {/* </div> */}
                    {/* </div> */}
        {/* </section> */}
        <Shopping/>
        <section>
            
                    <div className='text-center'>
                        <h2 className='text-center text-5xl'>Services</h2>
                        <p className='service-text px-4 text-lg'>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of
                        my services listed below. They will add more colors and emotions to your daily life.</p>
                    </div>

                    <div class="lg:grid lg:flex lg:mx-8 pt-3">
    <div class="col-12 md:col-6 px-4 lg:col-3">
        <div class="text-center py-8 shadow-6 border-orange-500 border-3 font-bold"><img alt='user' src={user} /><h2>Portrait</h2></div>
    </div>
    <div class="col-12 md:col-6 px-4 lg:col-3">
        <div class="text-center py-8 shadow-6 border-orange-500 border-3 font-bold"><img alt='leaf' src={leaf} /><h2>Landscape</h2></div>
    </div>
    <div class="col-12 md:col-6 px-4 lg:col-3">
        <div class="text-center py-8 shadow-6 border-orange-500 border-3 font-bold"><img alt='apple' src={apple} /><h2>Still Life</h2></div>
    </div>
    <div class="col-12 md:col-6 px-4 lg:col-3">
        <div class="text-center py-8 shadow-6 border-orange-500 border-3 font-bold "><img alt='home' src={house} /><h2>Urban</h2></div>
    </div>
                    </div>
                    <div className='flex justify-content-center pt-2'>
                        <Button className='bg-white text-orange-500 border-orange-500 border-round-3xl'>View All Services</Button>
                    </div>


                   
                
        </section>
        
        </div>
    )
}
        