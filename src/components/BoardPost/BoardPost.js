import React from 'react'; 
import './BoardPost.css'; 
import { getNewQuiz } from '../../actions/quiz'; 
import { connect } from 'react-redux'; 

export class BoardPost extends React.Component {

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


const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(BoardPost); 




