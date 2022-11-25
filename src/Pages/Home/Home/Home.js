import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Newsletter from '../NewsLetter/Newsletter';
import Services from '../Products/Products';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;