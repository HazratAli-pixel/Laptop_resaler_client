import React from 'react';
import Service from './Product';

const Products = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: 'https://logodownload.org/wp-content/uploads/2017/04/fujitsu-logo-0.png'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: 'http://nwac.com.au/wp-content/uploads/2013/08/Fujitsu-Logo-Red-Backing.jpg'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: 'https://logodownload.org/wp-content/uploads/2017/04/fujitsu-logo-0.png'
        },
        {
            id: 4,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: 'https://logodownload.org/wp-content/uploads/2017/04/fujitsu-logo-0.png'
        },
    ]

    return (
        <div className='mt-16 '>
            <div className='text-center'>
                <h3 className='text-3xl font-bold text-primary uppercase'>Advertise Products</h3>
                <h2 className='p-2 text-xl'>See here latest unsold products</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Products;