import React from 'react'; 
import { connect } from 'react-redux'; 

export class Quiz extends React.Component {
    render() {   
        return ( 
            <div>
                <p>Quiz</p>
            </div>
        )        
    }
}

const mapStateToProps = state => ({
    quizActive: state.answers.length > 0
}); 

export default connect(mapStateToProps)(Quiz); 

