import React from 'react';
import {connect} from 'react-redux';
import AddDateForm from './add-date-form';

export function AddDatePage(props) {
   
    return (
        <div className="text-center bg-dark my-2">
            <div className="mx-5 mt-4">
                <p>After submitting the following information, a play date will be added to the Find page.</p>
            </div>
            <AddDateForm  />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddDatePage);