import React from 'react';
import Products from '../../Products/Products';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <h1>home</h1>
            <Products></Products>
        </>
    );
};

export default Home;