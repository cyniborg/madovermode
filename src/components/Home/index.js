import React from 'react'
import ProductImage from './ProductImage'
import ProductContent from './ProductContent'


export default function Home() {
    return (
        <div className="product-listing">

            <ProductImage source = {"/img/ring-1-2.jpg"} />
            <ProductContent />

        </div>
    )
}
