import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';
import Logo from '../../Logo';
import * as authActions from '../../../store/actions/authActions';

const MainHeader = props => {

    

    return (
        <div className="MainHeader">
            <Logo />
            <div>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i>({props.cartCount})</Link>
                
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getToken: () => dispatch(authActions.getToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);