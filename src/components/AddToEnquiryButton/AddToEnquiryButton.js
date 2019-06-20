import React from 'react'

export default function AddToEnquiryButton(props) {
    return (
        <React.Fragment>
            <button className="btn-link" onClick = {(e)=>{props.handleClick(e)}} >Add to enquiry list</button>
        </React.Fragment>
    )
}
