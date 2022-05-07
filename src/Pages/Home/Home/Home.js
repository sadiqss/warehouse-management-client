import React from 'react';
import Products from '../../Products/Products';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Products></Products>
        </>
    );
};

export default Home;