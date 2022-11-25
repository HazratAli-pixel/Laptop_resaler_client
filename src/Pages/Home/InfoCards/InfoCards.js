import React from 'react';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'HP',
            description: '',
            iconlink:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png',
            bgClass: 'bg-gradient-to-r from-green-200 to-red-200'
        },
        {
            id: 2,
            name: 'Dell',
            description: '',
            iconlink:'https://pbs.twimg.com/profile_images/1128674419738595329/q1mhPmSs_400x400.png',
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Lenovo',
            description: '',
            iconlink:'https://www.pngall.com/wp-content/uploads/8/Lenovo-Logo-PNG-File.png',
            bgClass: 'bg-gradient-to-r from-green-200 to-red-200'
        },
        {
            id: 4,
            name: 'Asus',
            description: '',
            iconlink:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092011/asus_logo.ai_.png?itok=LFGV-FUt',
            bgClass: 'bg-accent'
        },
        {
            id: 5,
            name: 'Acer',
            description: '',
            iconlink:'https://pbs.twimg.com/profile_images/915251508760920065/CS3k9D2W_400x400.jpg',
            bgClass: 'bg-gradient-to-r from-green-200 to-red-200'
        },
        {
            id: 6,
            name: 'Toshiba',
            description: '',
            iconlink:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/3422/brand.gif?itok=fSQ5wTCq',
            bgClass: 'bg-accent'
        },
        {
            id: 7,
            name: 'Walton',
            description: '',
            iconlink:'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/audd4z9mrhsgjf7o7wi7',
            bgClass: 'bg-gradient-to-r from-green-200 to-red-200'
        },
        {
            id: 8,
            name: 'Apple',
            description: '',
            iconlink:'https://thumbs.dreamstime.com/b/apple-logo-editorial-vector-illustration-apple-logo-editorial-vector-illustration-background-136504827.jpg',
            bgClass: 'bg-accent'
        },
        {
            id: 9,
            name: 'Samsung',
            description: '',
            iconlink:'https://i.pinimg.com/originals/05/0a/c9/050ac92cb432973286bbba0b3637f17c.jpg',
            bgClass: 'bg-gradient-to-r from-green-200 to-red-200'
        },
        {
            id: 10,
            name: 'Microsoft',
            description: '',
            iconlink:'https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297.jpg',
            bgClass: 'bg-accent'
        },
        {
            id: 11,
            name: 'Compaq',
            description: '',
            iconlink:'https://www.vector-logo.net/logo_preview/eps/c/Compaq.png',
            bgClass: 'bg-gradient-to-r from-green-200 to-red-200'
        },
        {
            id: 12,
            name: 'Fujitsu',
            description: '',
            iconlink:'https://s3-symbol-logo.tradingview.com/fujitsu--600.png',
            bgClass: 'bg-accent'
        },
    ]

    return (
        <div className='shadow-lg px-3 pt-14 pb-3 rounded-lg'>
            <div className=''>
                <p className='text-3xl font-bold'>Laptop Brands Category</p>
            </div>
            <div className='grid mt-8 gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
            </div>
        </div>
    );
};

export default InfoCards;