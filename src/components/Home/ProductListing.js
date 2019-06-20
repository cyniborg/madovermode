import React from 'react';
import ProductImage from './ProductImage';
import ProductContent from './ProductContent';

export default function ProductListing(props) {
    return (
        <div className="product-listing">

            {props.product.map(e => (
                    <React.Fragment key={e.id}>
                        <ProductImage source={e.pImg}/>
                        <ProductContent data={e} fromRouter = {props.fromRouter} />
                    </React.Fragment>

                ))}

        </div>
    )
}
