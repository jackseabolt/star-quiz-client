import React from 'react';
import { connect } from 'react-redux';
import './Nasa.css';
import { Transition } from 'react-transition-group';
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

    render() {

        // styles for fade-in transition
        const duration = 1000;
        const defaultStyle = {
            opacity: 0,
            transition: `opacity ${duration}ms ease-in-out`
        }
        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 }
        }

        // controls image display as data is retrieved
        let nasaImage;
        if (this.props.nasaImageUrl) {
            if(checkURL(this.props.nasaImageUrl)) {
                nasaImage = <img className="nasa-image" src={this.props.nasaImageUrl}
                onClick={() => this.handleNasaImage()}
                alt={this.props.nasaImageTitle} />
            } else {
                nasaImage = <img className="nasa-image-backup" src={require('../../images/backup.png')}
                alt="NASA Image of the Day" />
            }
        } else {
            nasaImage = <div className="nasa-loading"></div>
        }

        return (
            <div className="nasa">
                <div className="global-container">
                    <Transition in={true} timeout={duration} appear={true}>
                        {(state) => (
                            <div className="nasa-flex" style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>

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
                                    {nasaImage}
                                </div>
                            </div>

                        )}
                    </Transition>
                </div>
            </div>
        )
    }
}

function checkURL(url) {
    if (!url) {
        return false;
    }
    return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
}

const mapStateToProps = state => ({
    nasaImageUrl: state.nasaImageUrl ? state.nasaImageUrl : false,
    nasaImageExplanation: state.nasaImageExplanation,
    nasaImageTitle: state.nasaImageTitle
});

export default connect(mapStateToProps)(Nasa);

