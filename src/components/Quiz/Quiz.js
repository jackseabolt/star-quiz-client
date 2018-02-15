import React from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import { clearQuiz } from '../../actions/quiz'; 
import './Quiz.css'; 

export class Quiz extends React.Component {
    
    handleClose(e) {
        e.stopPropagation();
        this.props.dispatch(clearQuiz()); 
    }

    handleSubmit(event) {
        event.preventDefault(); 
    }
    
    render() {  
        
        let answers = this.props.answers.map((answer, idx) => (
            <div className="quiz-question">
                <input type="radio" name="answer" value={idx} /> <span className="quiz-question-label">{answer}</span>
            </div>
        )); 

        if (this.props.usingQuiz) {
            return ( 
                <div className="quiz-backdrop">
                    <div className="quiz-main">
                        <h2 className="quiz-title">{this.props.title} Quiz</h2>
                        <h4>QUESTION: {this.props.currentQuestion}</h4>
                        <form onSubmit={e => this.handleSubmit(e)}>
                            {answers}
                            <button className="quiz-button-submit">Submit</button>
                        </form>
                        
                    </div>
                </div>
            )  
        } 
        else {
            return <Redirect to="/" />; 
        }      
    }
}

const mapStateToProps = state => ({
    usingQuiz: state.currentQuestion, 
    answers: state.answers, 
    currentQuestion: state.currentQuestion, 
    title: state.currentQuiz, 

}); 

export default connect(mapStateToProps)(Quiz); 

