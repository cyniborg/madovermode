import React from 'react'
import ProductContent from './ProductContent'
import ProductImages from './ProductImages'

export default function ProductDetail(props) {
    return (
        <div className="product-detail">

            <ProductImages />
            <ProductContent />
            
        </div>
    )
}
