import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import '../Products/Products.css';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://glacial-forest-41137.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div id="products" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Availabale Products</h1>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;