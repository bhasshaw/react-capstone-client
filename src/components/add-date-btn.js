import React from 'react';
import {Link} from 'react-router-dom';

export default function AddDate(props) {
    return (
        <Link to="/add"><span className="nav-link">Schedule</span></Link>
    );
};
