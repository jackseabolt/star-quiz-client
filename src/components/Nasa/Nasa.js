import React from 'react'; 
import { connect } from 'react-redux'; 
import './Nasa.css'; 
import { getNasaImage } from '../../actions/quiz'; 

export class Nasa extends React.Component {
    componentDidMount() {
        this.props.dispatch(getNasaImage())
    }
    
    render() {
        return ( 
            <div className="nasa"> 
                <div className="global-container">
                    <div className="nasa-flex">
                        <div className="nasa-section-left nasa-flex-grey">
                            <p className="global-header-lightback">Welcome</p>
                            <p className="global-paragraph-lightback">SpaceQuizes is a place for space enthusiasts to collide! 
                            Please feel free to explore this site. We built it for you! Think you're a 
                            space expert? Try one of our free quizes below!</p>
                            <br /><br />
                        </div>
                        <div className="nasa-section-right nasa-flex-padding">
                            <div className="nasa-title-container"><p className="nasa-title">NASA Image of the Day</p></div><img className="nasa-title-container-end" src={require('../../images/title-container-end.png')} />
                            <img className="nasa-image"src={this.props.nasaImageUrl}/>
                            {/* <p className="nasa-subpic"><strong>{this.props.nasaImageTitle}</strong> - {this.props.nasaImageExplanation}</p> */}
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
