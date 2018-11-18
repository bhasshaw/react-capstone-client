
import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link} from 'react-router-dom';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error text-danger" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        
        return (
            <form
                className="my-2 p-3 text-center bg-dark"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                    aria-required="true"
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                    aria-required="true"
                />
                {error}
                <button type="submit" className="button mt-3 mx-auto btn-sm btn-primary btn-block" disabled={this.props.pristine || this.props.submitting}>
                    Sign In
                </button>
                <Link to="/register"><button className="button mt-4 mx-auto btn-sm btn-primary btn-block">Not enrolled?</button></Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);