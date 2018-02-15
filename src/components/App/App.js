import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import Board from '../Board/Board'; 
import Quiz from '../Quiz/Quiz'; 
import {Route, withRouter} from 'react-router-dom';
import './App.css';

export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Board} />
        <Route exact path="/quiz" component={Quiz} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(App)); 
