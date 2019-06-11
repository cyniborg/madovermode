import React from 'react'

export default function ProductImage(props) {
    return (
        <div className="p-img col-65">
            <img src={props.source} alt="ring"/>
        </div>
    )
}
