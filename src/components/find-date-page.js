import React from 'react';
import {connect} from 'react-redux';
import {getDates} from '../actions/protected-data';
// import {Redirect} from 'react-router-dom';

export class FindDatePage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getDates());
	}
    render() {
        let dates = this.props.dates.map(date =>
        <div> 
            <div>{date.street}</div>
            <div>{date.city} {date.state} {date.zip}</div>
        <div>{date.time}</div>
        </div>)
        return (
            <div className="text-center bg-dark my-2 p-3 home">
                <h3>Results</h3>
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