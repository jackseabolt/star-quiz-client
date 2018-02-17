import React from 'react'; 
import { connect } from 'react-redux'; 
import './Footer.css'; 

export class Footer extends React.Component {
    render() {
        return ( 
            <div className="footer"> 
                <div className="footer-container-top">
                    <p className="footer-header">Links</p>
                    <p className="footer-paragraph">We're awesome, but so are these guys! Be sure to visit
                    their websites for more space news!</p>
                </div>
                <div className="footer-container">
                    <a href="https://www.nasa.gov/">
                        <img className="footer-nasa-logo" src={require('../../images/NASA.png')} alt="logo" />
                    </a>
                    
                    <a href="http://www.spacex.com/">
                        <img className="footer-spacex-logo" src={require('../../images/SpaceX.png')} alt="logo" />
                    </a>
                    <a href="https://www.esa.int/ESA">
                        <img className="footer-esa-logo" src={require('../../images/ESA.png')} alt="logo" />
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Footer); 

