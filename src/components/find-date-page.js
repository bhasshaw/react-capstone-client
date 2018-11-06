import React from 'react';
import {connect} from 'react-redux';
import {getDates} from '../actions/protected-data';
// import {Redirect} from 'react-router-dom';

export class FindDatePage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getDates());
	}
    render() {
        let dates = this.props.dates.map(date => <div>{date.street}</div>)
        return (
            <div className="text-center home">
                <h1>Hello</h1>
                {dates}
            </div>
        )
    }   
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    dates: state.protectedData.dates

});

export default connect(mapStateToProps)(FindDatePage);