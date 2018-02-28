import React from 'react'; 
import { connect } from 'react-redux'; 
import './Board.css'; 
import BoardPost from '../BoardPost/BoardPost';  
import { getAllQuizes } from '../../actions/quiz'; 
import { PulseLoader} from 'react-spinners';

export class Board extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllQuizes()); 
    }
    
    render() {
        let boardPosts; 
        if(this.props.quizLoading){ 
            boardPosts = <div className="board-loader">
                <PulseLoader
                    color={'#fff'} 
                    loading={true} 
                />
            </div>
        } else {
            boardPosts = this.props.quizes.map((quiz, index) => (
                <BoardPost key={index} quiz={quiz} />
            ))
        }   

        return ( 
            <div className="board"> 
                <div className="board-container">
                    { boardPosts }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    quizes: state.quizes? state.quizes : [],
    quizLoading: state.quizLoading 
}); 

export default connect(mapStateToProps)(Board); 

