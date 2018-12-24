import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
// import Time from 'react-time';
import {connect} from 'react-redux';
import {getDates} from '../actions/protected-data';

export class FindDatePage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getDates());
	}
    render() {
        let dates = this.props.dates.map((date, i) =>
        <div className="card mb-3" key={i}>
            <div className="card-header border-bottom-0 bg-secondary">
                <h4>{date.park}</h4>
            </div>
            <div className="card-body">
                <h6 className="mb-3"><Moment format="M-DD-YYYY">{date.date}</Moment></h6>
                <h6 className="mb-3">{date.startTime} to {date.endTime}</h6>
                <h6 className="">Host: {date.username}</h6>
            </div>
            <button type="button" className="btn btn-sm btn-primary mb-3 mx-3">Join (coming soon)</button>
        </div>)
        return (
            <div className="text-center text-dark bg-dark my-2 px-3 pt-3">
                <div className="text-light">
                    <p>Join an upcoming play date!</p>
                </div>
                <div className="card-deck">
                    {dates}
                </div>
            </div>
        )
    }   
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    dates: state.protectedData.dates

});

export default connect(mapStateToProps)(FindDatePage);