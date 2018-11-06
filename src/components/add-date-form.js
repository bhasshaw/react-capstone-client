import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './input';
import {postDate} from '../actions/protected-data';
import {withRouter} from 'react-router-dom';

export class AddDateForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(postDate(values));
        this.props.history.push("/dashboard");
    }
    render() {
        return (
            <form className="my-3 add-date-form" onSubmit={this.props.handleSubmit(values =>this.onSubmit(values))}>
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
                    className="mt-2 btn btn-primary" 
                    type="submit" 
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(withRouter(connect()(AddDateForm)));
