import React, {Component} from 'react';
import EnquiryIcon from './EnquiryIcon';
import EnquiryListBody from './EnquiryListBody';

export default class EnquiryList extends Component {

    constructor(){
        super();
        this.state = {
            showBody : false
        }
    }

    showBody = (e)=>{
        e.preventDefault();
        this.setState({showBody: !this.state.showBody})

    }
    render() {
        return (
            <div>
                <EnquiryIcon handleClick = {this.showBody} />
                <EnquiryListBody showBody={this.state.showBody} handleClick = {this.showBody} />
            </div>
        )
    }
}