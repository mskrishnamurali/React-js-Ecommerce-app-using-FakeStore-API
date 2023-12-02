import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { getAllProductId } from '../ApiService/api';
import { Link, useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        const fetchProductDetail = async () => {
            const data = await getAllProductId(id);
            setProductDetails(data);
        };
        fetchProductDetail();
    }, [id]);
     
    const handleBuyNow=()=>{
        window.confirm("the product is out of stock")
    }
    return (
        <div className='product-details-container'>
            <img src={productDetails.image} alt={productDetails.image} className='pdt-image' />

            <div className='product-info'>
                <h2 className='product-title'>{productDetails.title}</h2>
                <p className='pdt-description'>{productDetails.description}</p>
                <p className='pdt-price'>${productDetails.price}</p>
                <button className='buy-now-btn' onClick={handleBuyNow}>Buy now</button>
                <Link to='/'>
                    <button className='go-back-btn'>Go back Home</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductDetail;
