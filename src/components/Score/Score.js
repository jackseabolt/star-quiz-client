import React from 'react'; 
import { connect } from 'react-redux'; 
import './Score.css'; 

export class Score extends React.Component {
    render() {    
        return ( 
                <div className="score-container">
                    <h4 className="score-text">Score: {this.props.score}/{this.props.currentIndex}</h4>
                </div> 
            )  
        }    
}

const mapStateToProps = state => ({
    score: state.score, 
    currentIndex: state.currentIndex
}); 

export default connect(mapStateToProps)(Score); 
