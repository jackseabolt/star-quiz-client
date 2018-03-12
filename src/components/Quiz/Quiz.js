import React from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';  
import { answerQuiz, deleteSession, getNewQuestion  } from '../../actions/quiz'; 
import Score from '../Score/Score'; 
import './Quiz.css'; 

export class Quiz extends React.Component {

    constructor(props) {
        super(props); 
        // local state for local component changes
        this.state = {
            started: false
        }
    }

    handleStart() {
        this.setState({started: true})
    }
    
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


        // Transition styles

        const duration = 300; 
        const defaultStyle = {
            opacity: 0, 
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: '100%', 
            width: '100%', 
            margin: '0px', 
            zIndex: 20, 
            top: '0px', 
            bottom: '0px', 
            left: '0px', 
            right: '0px', 
            position: 'fixed',
            display: 'flex', 
            alignItems: 'center', 
            transition: `opacity ${duration}ms ease-in-out`
        }

        const transitionStyles = {
            entering: { opacity: 0 }, 
            entered: { opacity: 1 }
        }


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
        let correctAnswer = this.props.response ? <div className="global-center"><h4 className={responseClasses.join(' ')}>{this.props.response}</h4><Score /></div>: <p className="quiz-p"><strong>QUESTION:</strong> {this.props.currentQuestion}</p>; 

        // Submit or next 
        let button = this.props.correctAnswer ? <button className="quiz-button-submit">Next</button> : <button className="quiz-button-submit">Submit</button>; 

        if(!this.props.continue) {
            button = <button className="quiz-button-submit">End</button>
        }

        // content - is quiz started? 

        let content; 
        if(this.state.started) {
            content = <div>
                <h2 className="quiz-title">{this.props.title} Quiz</h2>
                    { correctAnswer }
                    <form className="quiz-form" onSubmit={e => this.handleSubmit(e)} ref={form => this.form = form}>
                        { answers }
                        { button }
                    </form>
                </div>
        } else {
            content = <div>
                <h2 className="quiz-title">{this.props.title} Quiz</h2>
                <p className="quiz-p">So you think you know about {this.props.title}? This quiz contains {this.props.quizLength} questions that will test your knowledge.<br /><br />
                Good luck!</p>
                 <button className="quiz-button-start" onClick={() => this.handleStart()}>Start</button>
            </div>
        }

        // Is quiz activated? 
        if (this.props.usingQuiz) {
            return ( 
                <Transition in={true} timeout={duration} appear={true}>
                    {(state) => (
                            <div style={{ 
                                ...defaultStyle,
                                ...transitionStyles[state]
                    }}>
                    {/* <div className="quiz-backdrop"> */}
                        <div className="quiz-main">
                            <div className="quiz-close" onClick={() => this.handleClose()}>
                                <i className="fas fa-times quiz-close-icon"></i>
                            </div>
                            { content } 
                        </div>
                    </div>
                )}
                </Transition >
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

