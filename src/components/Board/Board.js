import React from 'react'; 
import { connect } from 'react-redux'; 
import './Board.css';  
import { getAllQuizes, getNewQuiz } from '../../actions/quiz'; 

export class Board extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllQuizes()); 
    }
    
    render() { 

        return ( 
            <div className="board"> 
                <div className="board-container">
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Mercury'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/mercury.jpg')} />
                    </div>
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Venus'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/venus.jpg')} />
                    </div>
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Earth'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/earth.jpg')} />
                    </div>
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Mars'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/mars.jpg')} />
                    </div>
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Jupiter'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/jupiter.jpg')} />
                    </div>
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Saturn'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/saturn.jpg')} />
                    </div>
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Uranus'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/uranus.jpg')} />
                    </div>
                    <div className="board-post" onClick={() => this.props.dispatch(getNewQuiz('Neptune'))}> 
                        <img className="board-post-image" alt="planet" src={require('../../images/neptune.png')} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Board); 

