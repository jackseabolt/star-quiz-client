import React from 'react'; 
import Header from '../components/Header/Header'; 
import { shallow } from 'enzyme'; 

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    }); 
    it('contains title', () => {
        const wrapper = shallow(<Header />); 
        expect(wrapper.contains(<h1 className="header-title">StarQuiz</h1>)).toEqual(true); 
    });
    it('has class of header', () => {
        const wrapper = shallow(<Header />); 
        const target = wrapper.find('.header')
        expect(target.exists()).toEqual(true); 
    }); 
    it('has header-social-link-container', () => {
        const wrapper = shallow(<Header />); 
        const target = wrapper.find('.header-social-link-container')
        expect(target.exists()).toEqual(true); 
    }); 
}); 