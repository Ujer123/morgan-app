import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';

export default function Shopping() {
    const [visible, setVisible] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const header = [project1, project2, project3, project4, project5, project6];

    const title = [
        'Sea Storm',
        'Ruins of Ancient Fortress',
        'Two Lovers',
        'Watercolor Portrait',
        'Birches in Autumn',
        'Green Landscape'
    ];

    const para = [
        'This paintings is one of my latest works on sea ..',
        'When I have been to Scotland, I made this painting...',
        'This work was finished in two days for my customer...',
        'Jane Williams, my friend and colleague, asked...',
        'I love painting autumn trees and this work is a...',
        'Another abstract work, which appeared at my...'
    ];

    const footer = (index) => (
        <div className='flex justify-content-between'>
            <Button label="View Detail" className='text-orange-400 bg-white border-orange-400 border-round-3xl' onClick={() => handleDialog(index)} />
            <h3>$200</h3>
        </div>
    );

    const handleDialog = (index) => {
        setVisible(true);
        setSelectedCard(index);
    };

    const handleCloseDialog = () => {
        setVisible(false);
        setSelectedCard(null);
    };

    return (
        <section className='bg-body-tertiary mx-5 lg:mx-6'>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center text-5xl'>My Paintings</h2>
                    <div className='grid'>
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <div className='lg:col-4 pt-4' key={index}>
                                <Card title={title[index]} footer={() => footer(index)} header={<img alt="Card" src={header[index]} style={{ height: '290px' }} />} className="md:w-25rem">
                                    <p className="m-0">{para[index]}</p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Dialog header={title[selectedCard]} visible={visible} onHide={handleCloseDialog} style={{ width: '35vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className='flex justify-content-center'><img alt="Card" src={header[selectedCard]} style={{ height: '290px' }} /></div>
                <p className="m-0">{para[selectedCard]}</p>
            </Dialog>
        </section>
    )
}
