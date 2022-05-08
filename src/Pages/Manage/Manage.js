import React from 'react';
import useProducts from '../Hooks/useProducts';

const Manage = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Inventory</h2>
            {
                products.map(product => <div key={product._id}>
                    <h5>{product.name}<button onClick={() => handleDelete(product._id)}>X</button> </h5>
                </div>)
            }
        </div>
    );
};

export default Manage;