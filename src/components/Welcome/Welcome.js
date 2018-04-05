import React from 'react'; 
import './Welcome.css'; 
import { Transition } from 'react-transition-group'; 

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [
                {
                    quote1: "\"The Universe is under no obligation",
                    quote2: "to make sense to you.\"",
                    author: '- Neil deGrasse Tyson'
                }, 
                {
                    quote1: "\"Somewhere, something incredible",
                    quote2: "is waiting to be known.\"",
                    author: '- Carl Sagan'
                }, 
                {
                    quote1: "\"I know nothing with any certainty,",
                    quote2: "but the sight of the stars makes me dream.\"",
                    author: '- Vincent van Gogh'
                }, 
                {
                    quote1: "\"Astronomy compels the soul to look upward,",
                    quote2: "and leads us from this world to another.\"",
                    author: '- Plato'
                }, 
                {
                    quote1: "\"To confine our attention to terrestrial matters",
                    quote2: "would be to limit the human spirit.\"",
                    author: '- Steven Hawking'
                }
            ], 
            quoteKey: 0
        }
    }

    changeKey() {
        if(this.state.quoteKey >= 4) {
            this.setState({ quoteKey: 0 })
        } else {
            this.setState({ quoteKey: this.state.quoteKey + 1 })
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.changeKey()
        }, 7000)
    }

    render() {
        const duration = 400; 
        const defaultStyle = {
            opacity: 0, 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            transition: `opacity ${duration}ms ease-in-out`
        }

        const transitionStyles = {
            entering: { opacity: 0 }, 
            entered: { opacity: 1 }
        }

        return ( 
            <div className="welcome"> 
                <img id="welcome-mobile" src={require('../../images/mobile_background.jpg')} alt="background" />
                <div className="video-background">
                    <Transition in={true} timeout={1000} appear={true}>
                        {(state) => (
                            <div id="banner" className="video-foreground" style={{ 
                                ...transitionStyles[state]
                            }}>
                            <iframe id="welcome-video" title="welcome" src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        )}
                    </Transition>
                </div>

                <Transition in={true} timeout={duration} appear={true}>
                    {(state) => (
                        <div style={{ 
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <h1 className="welcome-title">{this.state.quotes[this.state.quoteKey].quote1}<br />
                            {this.state.quotes[this.state.quoteKey].quote2}</h1>
                            <h3 className="welcome-title-sub">{this.state.quotes[this.state.quoteKey].author}</h3>
                        </div>
                    )}
                </Transition>

            </div>
        )
    }
}

