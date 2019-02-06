import React from 'react';
import {Link} from 'react-router-dom';

export default function AddDate(props) {
    return (
        <Link to="/add" className="nav-link text-white">Create</Link>
    );
};
