import React from 'react';
import {connect} from 'react-redux';
import {getMyDates} from '../actions/protected-data';
import {deleteDate} from '../actions/protected-data';
import './main.css';

export class MyDogDatesPage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getMyDates());
    }
    handleDelete(id) {
        this.props.dispatch(deleteDate(id))
        window.location.reload()
    }
    render() {
        let dates = this.props.dates.map((date, i) =>
        <div className="card mb-3" key={i}> 
            <div className="card-header border-bottom-0 bg-secondary">
                <h4>{date.park}</h4>
            </div>
            <div className="card-body">
                <h5 className="mb-3">{date.date}</h5>
                <h6 className="">{date.startTime} to {date.endTime}</h6>
            </div>
            <button type="submit" onClick={() => this.handleDelete(date.id)} className="btn btn-sm btn-primary mb-3 mx-3">Cancel</button>
        </div>)
        return (
            <div className="text-center bg-dark text-dark my-2 px-3 pt-3">
                <div className="text-light">
                    <p>From here you can view and cancel your play dates you have created.</p>
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

export default connect(mapStateToProps)(MyDogDatesPage);