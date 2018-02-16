import React from 'react'; 
import { connect } from 'react-redux'; 
import './BoardHeader.css'; 

export class BoardHeader extends React.Component {
    render() {
        return ( 
            <div className="board-header"> 
                <p className="board-header-header">Quizes</p>
                <p className="board-header-paragraph">Think you are a space trivia expert? Put yourself to the challenge
                with one of our free tests!</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});  

export default connect(mapStateToProps)(BoardHeader); 

