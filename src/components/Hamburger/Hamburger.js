import React from 'react'; 
import { connect } from 'react-redux'; 
import './Hamburger.css'; 

export class Hamburger extends React.Component {
    render() {
        return ( 
            <div className="hamburger-container">
                <div id="ham1" className="hamburger-stripe">
                </div>
                <div id="ham2" className="hamburger-stripe">
                </div>
                <div id="ham3" className="hamburger-stripe">
                </div> 
            </div>             
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Hamburger); 



