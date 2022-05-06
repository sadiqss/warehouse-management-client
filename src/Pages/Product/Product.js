import React from 'react';

const Product = ({ product }) => {
    const { id, name, img } = product;
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Product;