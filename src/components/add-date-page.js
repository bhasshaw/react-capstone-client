import React from 'react';
import {connect} from 'react-redux';
import AddDateForm from './add-date-form';

export function AddDatePage(props) {
   
    return (
        <div className="text-center bg-dark my-2">
            <AddDateForm  />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddDatePage);