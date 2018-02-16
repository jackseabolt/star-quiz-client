import React from 'react'; 
import { connect } from 'react-redux'; 
import './Header.css'; 

export class Header extends React.Component {
    render() {
        return ( 
            <div className="header"> 
                Header
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Header); 

