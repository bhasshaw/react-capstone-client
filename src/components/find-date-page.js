import React from 'react';
import {connect} from 'react-redux';
import {getDates} from '../actions/protected-data';
// import {Redirect} from 'react-router-dom';

export class FindDatePage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getDates());
	}
    render() {
        let dates = this.props.dates.map((date, i) =>
        <div className="card box-shadow mb-3" key={i}> 
            <div className="card-header">
                <h4>{date.park}</h4>
            </div>
            <div className="card-body">
                <h5 className="mb-3">{date.date}</h5>
                <h6 className="">{date.startTime} to {date.endTime}</h6>
            </div>
            <button type="button" className="btn btn-sm btn-primary mb-3 mx-3">RSVP</button>
        </div>)
        return (
            <div className="text-center text-dark bg-dark my-2 px-3 pt-3">
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