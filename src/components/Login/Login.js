import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
const Login = () => {
    return (
        <div>
            Login
        </div>
    )
}

const mapState = state => {
    console.log(state);
    return {

    }
}

export default compose(
    connect(mapState),
    firestoreConnect([{
        collection:'posts'
    }])
)(Login);
