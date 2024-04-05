
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

        <section className='lg:mx-8 sm:mx-0'>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-5xl px-5'>A Few Words About Me</h2>
                    <div className='grid'>
                    <div className='lg:col-6'>
                        <p className='max-w-full px-5 text-2xl'>My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
                        <Button label="Learn More" severity="warning" className='border-round-3xl mx-5' outlined/>
                    </div>
                    <div className='lg:col-6'>
                    <img alt="home" src={home} className='border-round-3xl px-5 pt-3 max-w-full' />
                    </div>
                </div>
            </div>
                    </div>
        </section>
        <Shopping/>
        <section>
            
                    <div className='text-center'>
                        <h2 className='mx-5 px-5'>Services</h2>
                        <p className='service-text px-4'>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of
                        my services listed below. They will add more colors and emotions to your daily life.</p>
                    </div>

                    <div class="grid lg:mx-8">
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
                    <div className='flex justify-content-center'>
                        <Button className='bg-white text-orange-500 border-orange-500 border-round-3xl'>View All Services</Button>
                    </div>


                   
                
        </section>
        
        </div>
    )
}
        