import React from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import './NasaPhoto.css'; 
import { toggleNasaImage } from '../../actions/quiz';

export class NasaPhoto extends React.Component {
    
    handleClose() {
        this.props.dispatch(toggleNasaImage())
    }

    render() {  
        // Is quiz activated? 
        if (this.props.usingNasaPhoto) {
            return ( 
                <div className="nasa-photo-backdrop">
                    <div className="nasa-photo-main">
                        <div className="nasa-photo-close" onClick={() => this.handleClose()}>
                            <i className="fas fa-times nasa-photo-close-icon"></i>
                        </div>
                        <img className="nasa-photo" alt={this.props.nasaImageTitle} src={this.props.nasaImageUrl} />
                    </div>
                </div>
            )  
        } 
        else {
            return <Redirect to="/" />; 
        }      
    }
}

const mapStateToProps = state => ({
    usingNasaPhoto: state.usingNasaPhoto, 
    nasaImageUrl: state.nasaImageUrl, 
    nasaImageExplanation: state.nasaImageExplanation, 
    nasaImageTitle: state.nasaImageTitle
}); 

export default connect(mapStateToProps)(NasaPhoto); 

