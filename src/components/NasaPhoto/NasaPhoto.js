import React from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import './NasaPhoto.css'; 
import NasaPhotoInfo from '../NasaPhotoInfo/NasaPhotoInfo'; 
import { toggleNasaImage } from '../../actions/quiz';
import { toggleInfo } from '../../actions/functional';

export class NasaPhoto extends React.Component {
    
    handleClose() {
        this.props.dispatch(toggleNasaImage())
    }

    handleInfo() {
        this.props.dispatch(toggleInfo()); 
    }

    render() { 
        
        // Is info for image displayed
        let picInfo; 
        if(this.props.infoOn) {
            picInfo = <NasaPhotoInfo />
        }
    
        // Is quiz activated? 
        if (this.props.usingNasaPhoto) {
            return ( 
                <div className="nasa-photo-backdrop">
                    <div className="nasa-photo-main">
                        <div className="nasa-photo-close" onClick={() => this.handleClose()}>
                            <i className="fas fa-times nasa-photo-close-icon"></i>
                        </div>
                        <div className="nasa-photo-info" onClick={() => this.handleInfo()}>
                            <i className="far fa-info-circle nasa-photo-info-icon"></i>
                        </div>
                        <img className="nasa-photo" alt={this.props.nasaImageTitle} src={this.props.nasaImageUrl} />
                        { picInfo }
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
    nasaImageTitle: state.nasaImageTitle, 
    infoOn: state.infoOn
}); 

export default connect(mapStateToProps)(NasaPhoto); 

