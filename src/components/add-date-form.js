import React from 'react';
import {Field, reduxForm,SubmissionError, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './input';

export class AddDateForm extends React.Component {
    onSubmit(values) {
        return fetch('/api/dates/date', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(  
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }
    render() {
        return (
            <form className="add-date-form" onSubmit={this.props.handleSubmit(values =>this.onSubmit(values))}>
                <label htmlFor="street">Street</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="street" 
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="city">City</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="city" 
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="state">State</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="state"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="zip">Zip</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="zip" 
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="date">Date</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="date" 
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="time">Time</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="time"
                    validate={[required, nonEmpty]}
                />
                <button 
                    className="btn btn-primary" 
                    type="button submit" 
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'adddate',
    onSubmitFail: (errors, dispatch) => dispatch(focus('add'))
})(AddDateForm);
