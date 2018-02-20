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
        console.log("IT FIRED")
        this.setState({ imageHover: !this.state.imageHover })
    }
     
    render() {

        let iconStyles =['fas', 'fa-search-plus', 'nasa-enlarge-icon'];
        if (this.state.imageHover) {
            iconStyles.push('show'); 
        } 
        let icon = <i className={iconStyles.join(" ")}></i>


        return ( 
            <div className="nasa"> 
                <div className="global-container">
                    <div className="nasa-flex">
                        <div className="nasa-section-left nasa-flex-grey">
                            <p className="global-header-lightback">Welcome!</p>
                            <p className="global-paragraph-lightback">SpaceQuizes is a place for space enthusiasts to collide! 
                            Please feel free to explore this site. We built it for you! Think you're a 
                            space expert? Try one of our free quizes below!</p>
                            <br /><br />
                        </div>
                        <div className="nasa-section-right nasa-flex-padding">
                            <div className="nasa-title-container">
                                <p className="nasa-title">NASA Image of the Day</p>
                            </div>
                            <img className="nasa-title-container-end" src={require('../../images/title-container-end.png')} alt="graphic" />
                            { icon }
                            <img className="nasa-image" src={this.props.nasaImageUrl} 
                            onClick={() => this.handleNasaImage()}
                            onMouseEnter={()=> this.handleNasaImageHover()}
                            alt={this.props.nasaImageTitle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    nasaImageUrl: state.nasaImageUrl, 
    nasaImageExplanation: state.nasaImageExplanation, 
    nasaImageTitle: state.nasaImageTitle
}); 

export default connect(mapStateToProps)(Nasa); 
