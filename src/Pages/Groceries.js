import React from 'react';
import Products from '../Components/Grocery';
import { apiKey } from '../Components/Api';

const Grocery = () => {
    const [productName, setProductName] = React.useState('');
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${productName}&number=20&offset=0`)
            .then(resp => resp.json())
            .then((data) => {
                if (Array.isArray(data.products)) {
                    setProducts(data.products)
                } else {
                    setProducts([]);
                }
                console.log(data.products);
            });
    }, [productName]);
    return (
        <div>
            <h2>All groceries can be found here</h2>
            <div>
                <form>
                    <input type="text" placeholder="Serach for a product"
                        onChange={(event) => {setProductName(event.target.value)}}
                    />
                    <div>
                        <Products products={products}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Grocery;
