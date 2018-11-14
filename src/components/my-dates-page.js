import React from 'react';
import {connect} from 'react-redux';
import {getDates} from '../actions/protected-data';
import {deleteDate} from '../actions/protected-data';
import './main.css';
// import {Redirect} from 'react-router-dom';

export class MyDogDatesPage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getDates());
    }
    handleDelete(id) {
        this.props.dispatch(deleteDate(id))
        // this.props.history.push("/dashboard");
        window.location.reload()
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.dates !== prevProps.dates) {
    //         this.props.dispatch(getDates());
    //     }
    // }
    render() {
        let dates = this.props.dates.map((date, i) =>
        <div className="card mb-3" key={i}> 
            <div className="card-header">
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
                    <p>You can view and cancel the play dates you have scheduled.</p>
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