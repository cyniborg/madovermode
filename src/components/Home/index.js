import React, {Component} from 'react';
import ProductListing from './ProductListing';
import fetchJewelleryAction from './fetchJewellery';
import Loader from './../Loader';

import {connect} from 'react-redux';

class Home extends Component {
    
    componentDidMount() {
        if (this.props.jewellery.length<1) {
            const {fetchJewellery} = this.props;
            fetchJewellery();
            
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isFetching ? <Loader /> : <ProductListing product = {this.props.jewellery} fromRouter = {this.props.fromRouter} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProp) => ({
    jewellery: state.home.jewellery,
    isFetching: state.home.isFetching,
    fromRouter: ownProp.fromRouter
});
const mapDispatchToProps = (dispatch) => ({
    fetchJewellery: () => dispatch(fetchJewelleryAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
