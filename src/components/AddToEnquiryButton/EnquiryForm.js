import React from 'react'

export default function EnquiryForm(props) {
    return (
        <div className="blurred-container">
            <div className="e-form-container">
                <div className="e-form">
                    <form action="POST">
                        <label htmlFor="metal">
                            Change Metal To:
                        </label>
                        <input type="radio" name="metal" defaultValue="same as design" defaultChecked/>
                        Keep original
                        <br/>
                        <input type="radio" name="metal" defaultValue="S-92.5"/>
                        Silver 92.5%
                        <br/>
                        <input type="radio" name="metal" defaultValue="S-75"/>
                        Silver 75%
                        <br/>
                        <input type="radio" name="metal" defaultValue="S-50"/>
                        Silver 50%
                        <br/>
                        <input type="radio" name="metal" defaultValue="G-22"/>
                        Gold 22K
                        <br/>
                        <input type="radio" name="metal" defaultValue="G-18"/>
                        Gold 18K
                        <br/>
                        <input type="radio" name="metal" defaultValue="G-10"/>
                        Gold 10K
                        <br/>

                        <label htmlFor="stones">Change Stones:
                        </label>
                        <input type="radio" name="stones" defaultValue="as it is" defaultChecked/>
                        Love the original design
                        <br/>
                        <input type="radio" name="stones" defaultValue="custom"/>
                        I would like my own stones
                        <br/>
                        <textarea name="stones" cols="30" rows="10" defaultValue = "Please enter the stones you would
                            like here. Also make it clear as of which stone you would like to replace" />

                        <label htmlFor="qty">Order Quantity:
                        </label>
                        <input type="number" name="qty" min="1" max="250" placeholder="1"/>
                        <div className="buttons">
                            <button onClick = {e=>{e.preventDefault()}}>Submit</button>
                            <button onClick = {(e)=>{props.handleClick(e)}}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
