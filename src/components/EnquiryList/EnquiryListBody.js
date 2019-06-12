import React from 'react'

export default function EnquiryListBody(props) {
    return (
        <div className={props.showBody ?"enquiry-list-container":"hidden"}>
            <div className="enquiry-list">
                <div className="enquiry-select">
                    <div className="el-image col-25">
                        <img src="/img/earring-1.jpg" alt="earrings"/>
                    </div>
                    <div className="enquiry-content col-75">
                        <h4>Title of the jewellery</h4>
                        <p>
                            Total Weight: 3 grams | Qty: 100 Pieces
                        </p>
                    </div>
                </div>
                <div className="enquiry-select">
                    <div className="el-image col-25">
                        <img src="/img/earring-1.jpg" alt="earrings"/>
                    </div>
                    <div className="enquiry-content col-75">
                        <h4>Title of the jewellery</h4>
                        <p>
                            Total Weight: 3 grams | Qty: 100 Pieces
                        </p>
                    </div>
                </div>

                <div className="el-footer">
                    <div className="el-content">
                        <a className="btn-link" href="#">Edit List</a>
                        <div className="btn-link" onClick = {(e)=>{props.handleClick(e)}} >Close</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
