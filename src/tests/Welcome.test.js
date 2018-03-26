import React from 'react'; 
import Welcome from '../components/Welcome/Welcome'; 
import { shallow, mount } from 'enzyme'; 

describe('Welcome', () => {
    it('renders without crashing', () => {
        shallow(<Welcome />); 
    }); 
    it('contains first text item on load', () => {
        const wrapper = mount(<Welcome />); 
        wrapper.instance(); 
        expect(wrapper.contains(<h3 className="welcome-title-sub">- Neil deGrasse Tyson</h3>)).toEqual(true); 
    }); 
    it('has a state of quoteKey 0 onload', () => {
        const wrapper = mount(<Welcome />); 
        wrapper.instance(); 
        expect(wrapper.state().quoteKey).toEqual(0); 
    }); 
    it('has a state of quoteKey 1 if changeKey() is called', () => {
        const wrapper = mount(<Welcome />); 
        wrapper.instance().changeKey(); ; 
        expect(wrapper.state().quoteKey).toEqual(1); 
    }); 
    it('contains video container with .video-foreground', () => {
        const wrapper = shallow(<Welcome />); 
        const target = wrapper.find('.video-foreground'); 
        expect(target.exists()).toEqual(true);
    }); 
}); 