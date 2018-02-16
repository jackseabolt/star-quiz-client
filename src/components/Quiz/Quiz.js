import React from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import { clearQuiz, answerQuiz, deleteSession  } from '../../actions/quiz'; 
import './Quiz.css'; 

export class Quiz extends React.Component {
    
    handleClose() {
        console.log("IT RAN")
        this.props.dispatch(deleteSession(this.props.sessionId))
    }

    handleSubmit(event) {  
        event.preventDefault();
        if (this.props.correctAnswer) {
            console.log('next');
        }
        else {
            const { answer } = this.form; 
            this.props.dispatch(answerQuiz(this.props.title, answer.value, this.props.sessionId)); 
        }
    }
    
    render() {  


        // WORKING HERE
        const responseClasses = [];
        if (this.props.response === "You're right!") {
            responseClasses.push('quiz-right-response')
        }
        else {
            responseClasses.push('quiz-wrong-response');
        }
        // WORKING HERE
        
        let answers = this.props.answers.map((answer, idx) => (
            <div key={idx} className="quiz-question">
                <input type="radio" name="answer" value={answer} /> <span className="quiz-question-label">{answer}</span>
            </div>
        )); 

        let correctAnswer = this.props.response ? <h4 className={responseClasses.join(' ')}>{this.props.response}</h4> : <h4>QUESTION: {this.props.currentQuestion}</h4>; 

        let button = this.props.correctAnswer ? <button className="quiz-button-submit">Next</button> : <button className="quiz-button-submit">Submit</button>; 

        console.log("CORRECT ANSWER:", this.props.correctAnswer)
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
    response: state.response
}); 

export default connect(mapStateToProps)(Quiz); 

