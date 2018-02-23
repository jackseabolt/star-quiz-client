import React from 'react'; 
import './Header.css'; 

export default class Header extends React.Component {
    render() {
        return ( 
            <div className="header"> 
                <h1 className="header-title">StarQuiz</h1>
            </div>
        )
    }
}

