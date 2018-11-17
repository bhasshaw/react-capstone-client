import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './input';
import {postDate} from '../actions/protected-data';
import {withRouter} from 'react-router-dom';

export class AddDateForm extends React.Component {
    onSubmit(values) {
        values.username = this.props.username;
        this.props.dispatch(postDate(values));
        this.props.history.push("/dashboard");
    }
    render() {
        return (
            <form className="my-2 p-3 text-center bg-dark" onSubmit={this.props.handleSubmit(values =>this.onSubmit(values))}>
                <label htmlFor="park">Park Name</label>
                <div>
                <Field
                    component={Input} 
                    type="text" 
                    name="park" 
                    validate={[required, nonEmpty]}
                    placeholder="Park Name"
                />
                </div>
                <label htmlFor="date">Date</label>
                <Field 
                    component={Input} 
                    type="date" 
                    name="date" 
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="startTime">Start Time</label>
                <Field 
                    component={Input} 
                    type="time" 
                    name="startTime"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="endTime">End Time</label>
                <Field 
                    component={Input}
                    type="time"
                    name="endTime"
                    validate={[required, nonEmpty]}
                />
                <button 
                    className="button mt-3 mx-auto btn-sm btn-primary btn-block" 
                    type="submit" 
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username
});

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(withRouter(connect(mapStateToProps)(AddDateForm)));
