import React from 'react';
import {Link} from 'react-router-dom';

import '../css/Nav.css';

class Nav extends React.Component {
    handleClick = () => this.props.contactRef.current.scrollIntoView()

    render() {
        console.log(this.props)
        return (
            <div className="nav">
                <div className="ui container">
                    <div className='nav-left'>
                        <Link to='/'><img src="logo.png" alt="Everforex Logo"/></Link>
                    </div>
                    <div className='nav-right'>
                        <Link to='/careers' className='button'><p>Careers</p></Link>
                        <p onClick={this.handleClick} className='button solid'>Sign Up</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;