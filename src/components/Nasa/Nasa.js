import React from 'react'; 
import { connect } from 'react-redux'; 
import './Nasa.css'; 
import { getNasaImage, toggleNasaImage } from '../../actions/quiz'; 

export class Nasa extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            imageHover: false
        }
    }
    
    componentDidMount() {
        this.props.dispatch(getNasaImage())
    }

    handleNasaImage() {
        this.props.dispatch(toggleNasaImage())
    }

    handleNasaImageHover() {
        this.setState({ imageHover: !this.state.imageHover })
    }
     
    render() {

        let iconStyles =['fas', 'fa-search-plus', 'nasa-enlarge-icon'];
        if (this.state.imageHover) {
            iconStyles.push('show'); 
        } 
        let icon = <i className={iconStyles.join(" ")}></i>


        let nasaImage; 
        if(this.props.nasaImageUrl) {
            nasaImage =  <img className="nasa-image" src={this.props.nasaImageUrl} 
            onClick={() => this.handleNasaImage()}
            onMouseEnter={()=> this.handleNasaImageHover()}
            alt={this.props.nasaImageTitle} />
        } else {
            nasaImage = <div className="nasa-loading"></div> 
        }

        return ( 
            <div className="nasa"> 
                <div className="global-container">
                    <div className="nasa-flex">
                        <div className="nasa-section-left nasa-flex-grey">
                            <p className="global-header-lightback">Welcome!</p>
                            <p className="global-paragraph-lightback">StarQuiz is an application for testing your 
                            knowledge of the Solar System! Think you're a space expert? Try one of our free quizzes below!</p>
                            <br /><br />
                        </div>
                        <div className="nasa-section-right nasa-flex-padding">
                            <div className="nasa-title-container">
                                <p className="nasa-title">NASA Image of the Day</p>
                            </div>
                            <img className="nasa-title-container-end" src={require('../../images/title-container-end.png')} alt="graphic" />
                            { icon }
                            { nasaImage }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function checkURL(url) {
    if(!url) {
        return false; 
    }
    return(url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
}

const mapStateToProps = state => ({
    nasaImageUrl: checkURL(state.nasaImageUrl) ? state.nasaImageUrl : false, 
    nasaImageExplanation: state.nasaImageExplanation, 
    nasaImageTitle: state.nasaImageTitle
}); 

export default connect(mapStateToProps)(Nasa); 

