import React from 'react'; 
import './BoardHeader.css'; 

export default class BoardHeader extends React.Component {
    render() {
        return ( 
            <div className="board-header"> 
                <div className="global-container">
                    <p className="global-header-darkback ">Quizes</p>
                    <p className="global-paragraph-darkback">Think you are a space trivia expert? Put yourself to the challenge
                    with one of our free tests!</p>
                </div>
            </div>
        )
    }
}

 

