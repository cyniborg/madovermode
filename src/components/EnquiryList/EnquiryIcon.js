import React from 'react'

export default function EnquiryIcon({handleClick}) {
    return (
        <div className="icon-container" onClick = {(e)=>{handleClick(e)}}>
            <div className="icon"><img src="img/order.svg" alt="Enquiry List"/>
                <span>1</span>
            </div>
        </div>
    )
}
