import React from 'react';

const Products = ({ products }) => {
    return (
        <div>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <img src={product.image} height="200" width="150" alt=""/>
                            <h3>{product.title}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Products;
