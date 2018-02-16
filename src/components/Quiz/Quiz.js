import React from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import { answerQuiz, deleteSession, getNewQuestion  } from '../../actions/quiz'; 
import './Quiz.css'; 

export class Quiz extends React.Component {
    
    handleClose() {
        this.props.dispatch(deleteSession(this.props.sessionId))
    }

    handleSubmit(event) {  
        event.preventDefault();
        if (this.props.correctAnswer && this.props.continue) {
            this.props.dispatch(getNewQuestion(this.props.title, this.props.sessionId)); 
        }
        else if (this.props.continue) {
            const { answer } = this.form; 
            this.props.dispatch(answerQuiz(this.props.title, answer.value, this.props.sessionId)); 
        }
        else {
            this.props.dispatch(deleteSession(this.props.sessionId))
        }
    }
    
    render() {  

        // Response text colors
        const responseClasses = [];
        if (this.props.response) {
            if (this.props.response.includes("You're right!")) {
                responseClasses.push('quiz-right-response')
            }
            else {
                responseClasses.push('quiz-wrong-response');
            }
        }
        
        // Answer radio buttons
        let answers = this.props.answers.map((answer, idx) => (
            <div key={idx} className="quiz-question">
                <input type="radio" name="answer" value={answer} /> <span className="quiz-question-label">{answer}</span>
            </div>
        )); 

        // Question or answer
        let correctAnswer = this.props.response ? <div><h4 className={responseClasses.join(' ')}>{this.props.response}</h4><h3 className="quiz-score">{this.props.score}/{this.props.currentIndex}</h3></div> : <p><strong>QUESTION:</strong> {this.props.currentQuestion}</p>; 

        // Submit or next 
        let button = this.props.correctAnswer ? <button className="quiz-button-submit">Next</button> : <button className="quiz-button-submit">Submit</button>; 

        console.log("CONTINUE:", this.props.continue)
        if(!this.props.continue) {
            button = <button className="quiz-button-submit">End</button>
        }

        // Is quiz activated? 
        if (this.props.usingQuiz) {
            return ( 
                <div className="quiz-backdrop">
                    <div className="quiz-main">
                        <div className="quiz-close" onClick={() => this.handleClose()}>
                            <i className="fas fa-times quiz-close-icon"></i>
                        </div>
                        <h2 className="quiz-title">{this.props.title} Quiz</h2>
                        { correctAnswer }
                        <form className="quiz-form" onSubmit={e => this.handleSubmit(e)} ref={form => this.form = form}>
                            { answers }
                            { button }
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
    sessionId: state.sessionId,  
    correctAnswer: state.correctAnswer, 
    response: state.response,
    continue: state.continue, 
    quizLength: state.quizLength,
    score: state.score, 
    currentIndex: state.currentIndex
}); 

export default connect(mapStateToProps)(Quiz); 

