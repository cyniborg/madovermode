import React, { Component } from 'react';
import AddToEnquiryButton from './AddToEnquiryButton';
import EnquiryForm from './EnquiryForm';

export default class AddToEnquiry extends Component {
    constructor(){
        super();
        this.state = {
            showForm: false
        }
    }

    handleClick = (e)=>{
        e.preventDefault();
        this.setState({
            showForm: !this.state.showForm
        })
    }
    render() {
        return (
            <React.Fragment>
                <AddToEnquiryButton handleClick = {this.handleClick} />
                {this.state.showForm ? <EnquiryForm handleClick = {this.handleClick} /> : null}
            </React.Fragment>
        )
    }
}
