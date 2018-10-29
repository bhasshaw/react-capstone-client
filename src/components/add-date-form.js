import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

export class AddDateForm extends React.Component {
    render() {
        return (
            <form>
                <label>City</label>
                <Field />
                <label>Park Name</label>
                <Field />
                <label>Date</label>
                <Field />
                <label>Time</label>
                <Field />
                <button className="btn btn-primary" type="button submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) => dispatch(focus('add'))
})(AddDateForm);
