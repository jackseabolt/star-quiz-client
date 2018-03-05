import { App } from '../components/App/App'; 
import React from 'react'; 
import { shallow } from 'enzyme'; 
import Header from '../components/Header/Header'; 
import Welcome from '../components/Welcome/Welcome'; 
import Nasa from '../components/Nasa/Nasa'; 
import Board from '../components/Board/Board'; 
import Footer from '../components/Footer/Footer'; 
import Quiz from '../components/Quiz/Quiz'; 
import NasaPhoto from '../components/NasaPhoto/NasaPhoto'; 

describe('App' , () => {
    it('renders without crashing', () => {
        shallow(<App />); 
    });
    it('contains components', () => {
       const wrapper = shallow(<App />);
       expect(wrapper.contains(<Header />)).toEqual(true); 
       expect(wrapper.contains(<Welcome />)).toEqual(true); 
       expect(wrapper.contains(<Nasa />)).toEqual(true); 
       expect(wrapper.contains(<Board />)).toEqual(true); 
       expect(wrapper.contains(<Footer />)).toEqual(true);  
    });
    it('does not contain Quiz when usingQuiz is false', () => {
        const wrapper = shallow(<App />); 
        expect(wrapper.contains(<Quiz />)).toEqual(false); 
    }); 
    it('contains Quiz when usingQuiz is true', () => {
        const wrapper = shallow(<App usingQuiz={true} />);
        expect(wrapper.contains(<Quiz />)).toEqual(true); 
    }); 
    it('does not contain NasaPhoto when usingNasaPhoto is false', () => {
        const wrapper = shallow(<App />); 
        expect(wrapper.contains(<NasaPhoto />)).toEqual(false); 
    }); 
    it('contains NasaPhoto when usingNasaPhoto is true', () => {
        const wrapper = shallow(<App usingNasaPhoto={true} />);
        expect(wrapper.contains(<NasaPhoto />)).toEqual(true); 
    });  
}); 