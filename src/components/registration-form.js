import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="my-2 p-3 text-center bg-dark"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First Name</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="firstName" 
                    aria-required="true"/>
                <label htmlFor="lastName">Last Name</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastName" 
                    aria-required="true"/>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                    aria-required="true"
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                    aria-required="true"
                />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                    aria-required="true"
                />
                <button
                    className="button mt-3 mx-auto btn-sm btn-primary btn-block"
                    type="button submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <Link to="/"><button className="button mt-4 mx-auto btn-sm btn-primary btn-block">Already enrolled?</button></Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);