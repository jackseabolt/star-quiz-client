import React from 'react'; 
import { connect } from 'react-redux'; 
import './BoardPost.css'; 
import { getNewQuiz } from '../../actions/quiz'; 

export default class BoardPost extends React.Component {

    handlePostClick() {
        this.props.dispatch(getNewQuiz(this.props.quiz.title))      
    }

    render() {
        return ( 
            <div className="board-post" onClick={() => this.handlePostClick()}> 
                <img className="board-post-image" alt="planet" src={this.props.quiz.image} />
            </div>
        ); 
    }
}



