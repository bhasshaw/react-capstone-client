import React from 'react';
import {connect} from 'react-redux';
import {Route,Switch, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Footer from './footer';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import AddDatePage from './add-date-page';
import FindDatePage from './find-date-page';
import MyDogDatesPage from './my-dates-page';
import {refreshAuthToken} from '../actions/auth';
import './custom.scss';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="cover-container h-100 d-flex p-2 mx-auto flex-column">
                <HeaderBar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/register" component={RegistrationPage} />
                    <Route exact path="/add" component={AddDatePage} />
                    <Route exact path="/find" component={FindDatePage} />
                    <Route exact path="/mydogdates" component={MyDogDatesPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));