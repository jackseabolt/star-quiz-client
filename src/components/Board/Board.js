import React from 'react'; 
import { connect } from 'react-redux'; 
import './Board.css'; 
import BoardPost from '../BoardPost/BoardPost';  
import { getAllQuizes } from '../../actions/quiz'; 

export class Board extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllQuizes()); 
    }
    
    render() {

        let boardPosts = this.props.quizes.map((quiz, index) => (
            <BoardPost key={index} quiz={quiz} />
        ))

        return ( 
            <div className="board"> 
                { boardPosts }
                Board
            </div>
        )
    }
}

const mapStateToProps = state => ({
    quizes: state.quizes? state.quizes : []
}); 

export default connect(mapStateToProps)(Board); 

