import React from 'react'; 
import Footer from '../components/Footer/Footer'; 
import { shallow, mount } from 'enzyme'; 

describe('Footer', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    }); 
    it('has class of footer', () => {
        const wrapper = shallow(<Footer />); 
        const target = wrapper.find('.footer')
        expect(target.exists()).toEqual(true); 
    }); 
    it('contains spacex link', () => {
        const wrapper = shallow(<Footer />); 
        const target = wrapper.find('.footer-spacex-logo')
        expect(target.exists()).toEqual(true); 
    }); 
    it('contains nasa link', () => {
        const wrapper = shallow(<Footer />); 
        const target = wrapper.find('.footer-nasa-logo')
        expect(target.exists()).toEqual(true); 
    }); 
    it('contains esa link', () => {
        const wrapper = shallow(<Footer />); 
        const target = wrapper.find('.footer-esa-logo')
        expect(target.exists()).toEqual(true); 
    }); 
}); 