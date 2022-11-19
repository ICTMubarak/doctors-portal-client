import React from 'react';
import DantalCare from '../../DantalCare/DantalCare';
import InfoCards from '../../InfoCards/InfoCards';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import MakeApointment from '../MakeApointment/MakeApointment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DantalCare></DantalCare>
            <MakeApointment></MakeApointment>
        </div>
    );
};

export default Home;