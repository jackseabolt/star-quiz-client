import React from 'react'; 
import { connect } from 'react-redux'; 
import './BoardPost.css'; 
import { getNewQuiz } from '../../actions/quiz'; 
import { Redirect } from 'react-router-dom';

export class BoardPost extends React.Component {

    handlePostClick() {
        console.log(this.props.quiz.id)
        this.props.dispatch(getNewQuiz(this.props.quiz.title))      
    }

    render() {
        return ( 
            <div className="board-post" onClick={() => this.handlePostClick()}> 
                <img className="board-post-image" alt="planet image" src={this.props.quiz.image} />
            </div>
        ); 
    }
}

const mapStateToProps = state => ({
    quizActive: state.answers.length > 0
}); 

export default connect(mapStateToProps)(BoardPost); 

