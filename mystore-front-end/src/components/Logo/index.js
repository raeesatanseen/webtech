import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <Link to="/">
             <img className="discoball" src="./event_hub_logo.jpg" />
            <div className="Logo" {...props}>
                <span>EVENT HUB</span>
            </div>
        </Link>
        
    );
}

export default Logo;