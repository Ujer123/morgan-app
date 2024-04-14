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
    const [visible, setVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const paintings = [
        {
          "image": project1,
          "title": "Sea Storm",
          "description": "This painting is one of my latest works on sea painting."
        },
        {
          "image": project2,
          "title": "Ruins of Ancient Fortress",
          "description": "When I have been to Scotland, I made this painting."
        },
        {
          "image": project3,
          "title": "Two Lovers",
          "description": "This work was finished in two days for my customer."
        },
        {
          "image": project4,
          "title": "Watercolor Portrait",
          "description": "Jane Williams, my friend and colleague, asked..."
        },
        {
          "image": project5,
          "title": "Birches in Autumn",
          "description": "I love painting autumn trees and this work is a..."
        },
        {
          "image": project6,
          "title": "Green Landscape",
          "description": "Another abstract work, which appeared at my..."
        }
      ];

    const handleDialog = (index) => {
        setSelectedCard(index);
        setVisible(true);
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
                        {paintings.map((item, index) => (
                            <div className='lg:col-4 pt-4' key={index}>
                                <Card title={item.title} footer={(
                                    <div className='flex justify-content-between'>
                                        <Button label="View Detail" className='text-orange-400 bg-white border-orange-400 border-round-3xl' onClick={() => handleDialog(index)} />
                                        <h3>$200</h3>
                                    </div>
                                )} 
                                header={<img alt="Card" src={item.image} className='border-round-lg' style={{ height: '290px' }} />} className="md:w-25rem">
                                    <p className="m-0">{item.description}</p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Dialog header={selectedCard !== null ? paintings[selectedCard].title : ''} visible={visible} onHide={handleCloseDialog} style={{ width: '35vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className='flex justify-content-center'><img alt="Card" src={selectedCard !== null ? paintings[selectedCard].image : ''} style={{ height: '290px' }} /></div>
                <p className="m-0">{selectedCard !== null ? paintings[selectedCard].description : ''}</p>
            </Dialog>
        </section>
    );
}
