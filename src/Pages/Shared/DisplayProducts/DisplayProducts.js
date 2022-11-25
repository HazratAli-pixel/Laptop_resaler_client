import React from 'react';
import DisplayProduct from './DisplayProduct';

const DisplayProducts = () => {
    const productsList = [
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
        <div className='shadow-lg px-3 pt-14 pb-3 rounded-lg'>
            <div className=''>
                <p className='text-3xl font-bold'><strong>Category:</strong> HP</p>
            </div>
            <div className='grid mt-8 gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {
                productsList.map(product => <DisplayProduct 
                    key={product.id}
                    product={product}
                ></DisplayProduct>
                )
            }
            </div>
        </div>
    );
};

export default DisplayProducts;