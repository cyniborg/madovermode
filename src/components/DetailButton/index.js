import React, { Component } from 'react';
import storeCurrentProductId from './storeCurrentProductId'
import { connect } from 'react-redux';

class DetailButton extends Component {

    handleClick = (e) => {
        const { currentProductIdAction, productId, title } = this.props;
        currentProductIdAction(productId);
        this.props.fromRouter.history.push(`/jewellery/${title.replace(/\s+/g, '-').toLowerCase()}`)
    }

    render() {
        return (
            <React.Fragment>
                <button className = "btn-link" onClick = {this.handleClick} > Details </button>
            </React.Fragment>

        )
    }
}

const mapDispatchToProps = (dispatch, ownProp) => ({
    currentProductIdAction: (id)=> dispatch(storeCurrentProductId(id)),
    productId: ownProp.productId,
    title: ownProp.title,
    fromRouter: ownProp.fromRouter
})

export default connect(null, mapDispatchToProps)(DetailButton);