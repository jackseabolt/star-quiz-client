import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import Board from '../Board/Board'; 
import Quiz from '../Quiz/Quiz'; 
import Nasa from '../Nasa/Nasa';
import Welcome from '../Welcome/Welcome';
import BoardHeader from '../BoardHeader/BoardHeader';
import {Route, withRouter} from 'react-router-dom';
import './App.css';

export class App extends Component {
  
  render() {

    let quiz; 
    if (this.props.usingQuiz) {
      quiz = <Quiz />
    }

    return (
      <div className="App">
        { quiz }
        <Header />
        <Welcome />
        <Nasa />
        <BoardHeader />
        <Route exact path="/" component={Board} />
        <Route exact path="/quiz" component={Quiz} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usingQuiz: state.currentQuestion, 
})

export default withRouter(connect(mapStateToProps)(App)); 
