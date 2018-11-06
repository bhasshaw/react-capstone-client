
import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link} from 'react-router-dom';
// import styled from 'styled-components';
// import './main.css';


export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        
        return (
            <form
                className="my-2 login-form p-3 text-center bg-dark"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                </div>
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button type="submit" className="mt-2 mx-auto btn-sm btn-primary" disabled={this.props.pristine || this.props.submitting}>
                    Log In
                </button>
                <Link to="/register"><button className="mt-2 mx-auto btn-sm btn-primary">Enroll</button></Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);