import React from 'react'; 
import { connect } from 'react-redux'; 
import './Header.css'; 

export class Header extends React.Component {
    render() {
        return ( 
            <div className="header"> 
                <h1 className="header-title">StarQuiz</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Header); 

