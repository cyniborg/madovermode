import React from 'react';
import AddToEnquiryButton from '../AddToEnquiryButton';
import DetailButton from '../DetailButton';

export default function ProductContent(props) {
    return (
        <div className="p-content col-25">
            <h2>{props.data.title}</h2>
            <p>
                <span className="p-desc">Metal</span>: {props.data.metal}&nbsp;|&nbsp;
                <span className="p-desc">
                    Stones</span>: {props.data.stones}&nbsp;|&nbsp;
                <span className="p-desc">
                    Weight</span>: {`${props.data.totalWeight}gm`}
            </p>
            <p> {props.data.description} </p>

            <div className="buttons">
                <AddToEnquiryButton />
                <DetailButton productId = {props.data.id} title = {props.data.title} fromRouter = {props.fromRouter} />
                
            </div>
        </div>
    )
}
