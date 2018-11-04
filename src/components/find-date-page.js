import React from 'react';
import {connect} from 'react-redux';
import {getDate} from '../actions/protected-data';
// import {Redirect} from 'react-router-dom';

export class FindDatePage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getDate(this.props.user));
	}
    render() {
        
        return (
            <div className="text-center home">
                <h1>Hello</h1>
            </div>
        )
    }   
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(FindDatePage);