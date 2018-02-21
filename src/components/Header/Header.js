import React from 'react'; 
import { connect } from 'react-redux'; 
import './Header.css'; 
import Hamburger from '../Hamburger/Hamburger'; 

export default class Header extends React.Component {
    render() {
        return ( 
            <div className="header"> 
                <h1 className="header-title">StarQuiz</h1>
                <Hamburger />
            </div>
        )
    }
}

