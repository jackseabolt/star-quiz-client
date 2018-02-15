import React from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import './Quiz.css'; 

export class Quiz extends React.Component {
    render() {  
        
        let answers = this.props.answers.map((answer, idx) => (
            <li key={idx}>{answer}</li>
        )); 

        if (this.props.usingQuiz) {
            return ( 
                <div className="quiz-backdrop">
                    <div className="quiz-main">
                        <h2>{this.props.title} Quiz</h2>
                        <h3>{this.props.currentQuestion}</h3>
                        <ul>
                        {answers}
                        </ul>
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

