import React from 'react';

export default function Footer() {
    return (
        <section className='bg-black-alpha-90 text-white h-full'>
            <div className='flex'>
                <div className='col-6'>
                    <p>&copy; Copyright All Rights Reserved</p>
                </div>
                <div className='col-6 flex justify-content-end lg:pr-4'>
                    <p className='text-end'>This site by Ujer Shaikh</p>
                </div>
            </div>
        </section>
    );
}
