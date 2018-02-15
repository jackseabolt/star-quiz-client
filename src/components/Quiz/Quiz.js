import React from 'react'; 
import { connect } from 'react-redux'; 

export class Quiz extends React.Component {
    render() {  
        
        let answers = this.props.answers.map((answer, idx) => (
            <li key={idx}>{answer}</li>
        )); 

        return ( 
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.currentQuestion}</h3>
                <ul>
                {answers}
                </ul>
            </div>
        )        
    }
}

const mapStateToProps = state => ({
    answers: state.answers, 
    currentQuestion: state.currentQuestion, 
    title: state.currentQuiz, 

}); 

export default connect(mapStateToProps)(Quiz); 

