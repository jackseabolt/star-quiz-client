import React from 'react'; 
import { Quiz } from '../components/Quiz/Quiz';
import { Score } from '../components/Score/Score';  
import { shallow, mount } from 'enzyme'; 
import { Redirect } from 'react-router-dom'; 

describe('Quiz', () => {
    it('renders without crashing', () => {
        shallow(<Quiz usingQuiz={true} answers={[]}/>);
    }); 
    it('dispatches an action when close icon is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Quiz usingQuiz={true} answers={[]} dispatch={spy} />); 
        wrapper.instance(); 
        const closeBtn = wrapper.find('.quiz-close'); 
        closeBtn.simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('renders redirect is usingQuiz prop is false', () => {
        const wrapper = shallow(<Quiz usingQuiz={false} answers={[]}/>);
        expect(wrapper.contains(<Redirect to="/" />)).toEqual(true); 
    }); 
    it('renders intro content when component mounts', () => {
        const wrapper = mount(<Quiz usingQuiz={true} answers={[]} />); 
        const target = wrapper.find('.quiz-button-start'); 
        expect(target.exists()).toEqual(true); 
    });
    it('renders quiz content if started state is true', () => {
        const wrapper = mount(<Quiz usingQuiz={true} answers={[]} />); 
        wrapper.setState({ started: true }); 
        const target = wrapper.find('.quiz-form'); 
        expect(target.exists()).toEqual(true); 
    });
    it('changes start state when start button is clicked', () => {
        const wrapper = mount(<Quiz usingQuiz={true} answers={[]} />); 
        const button = wrapper.find('.quiz-button-start');
        button.simulate('click'); 
        const target = wrapper.find('.quiz-form'); 
        expect(target.exists()).toEqual(true); 
        expect(wrapper.state().started).toEqual(true); 
    });
    it('it displays action prop contents when started', () => {
        const wrapper = mount(<Quiz usingQuiz={true} answers={['ex1', 'ex2', 'ex3']} />);
        wrapper.instance(); 
        const button = wrapper.find('.quiz-button-start');
        button.simulate('click'); 
        expect(wrapper.state().started).toEqual(true);  
        expect(wrapper.contains(<input type="radio" name="answer" value={'ex1'} />)).toEqual(true); 
        expect(wrapper.contains(<input type="radio" name="answer" value={'ex2'} />)).toEqual(true); 
        expect(wrapper.contains(<input type="radio" name="answer" value={'ex3'} />)).toEqual(true); 
    }); 
    it('dispatch action when form is submited', () => {
        const spy = jest.fn();
        const wrapper = mount(<Quiz usingQuiz={true} answers={[]} dispatch={spy}/>); 
        const button = wrapper.find('.quiz-button-start');
        button.simulate('click'); 
        const target = wrapper.find('.quiz-form'); 
        target.simulate('submit');
        expect(spy).toHaveBeenCalled();  
    });
    // it('displays score if response and usingQuiz prop give proper input', () => {
    //     const wrapper = shallow(<Quiz usingQuiz={true} answers={[]} response={'example'}/>);  
    //     wrapper.setState({ started: true })  
    //     wrapper.render(); 
    //     expect(wrapper.contains(<Score />)).toEqual(true)
    // }); 
});