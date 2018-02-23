import React from 'react'; 
import { connect } from 'react-redux';
import './NasaPhotoInfo.css';  
import { toggleInfo } from '../../actions/functional';

export class NasaPhotoInfo extends React.Component {

    handleClose() {
        this.props.dispatch(toggleInfo()); 
    }

    render() {
        return (
            <div className="nasa-photo-info-container">
                <div className="nasa-photo-info-close" onClick={() => this.handleClose()}>
                    <i className="fas fa-times nasa-photo-info-close-icon"></i>
                </div>
                <h4 className="global-paragraph-mini-darkback">{this.props.nasaImageTitle}</h4>
                <p className="global-paragraph-mini-darkback">{this.props.nasaImageExplanation}</p>
            </ div> 
        ) 
    }
}

const mapStateToProps = state => ({
    nasaImageExplanation: state.nasaImageExplanation, 
    nasaImageTitle: state.nasaImageTitle
}); 

export default connect(mapStateToProps)(NasaPhotoInfo); 