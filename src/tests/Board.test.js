import { Board } from '../components/Board/Board'; 
import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

describe('Board', () => {
    it('renders without crashing', () => {
        shallow(<Board dispatch={() => {}} quizes={[]}/>);
    });
    it('dispatches action when the component mounts', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        expect(spy).toHaveBeenCalledTimes(1); 
    }); 
    it('dispatches action when mercury is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#mercury') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2); 
    }); 
    it('dispatches action when venus is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#venus') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2); 
    }); 
    it('dispatches action when earth is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#earth') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2); 
    }); 
    it('dispatches action when mars is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#mars') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2); 
    });
    it('dispatches action when jupiter is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#jupiter') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2);
    }); 
    it('dispatches action when saturn is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#saturn') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2);
    });  
    it('dispatches action when uranus is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#uranus') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2); 
    }); 
    it('dispatches action when netpune is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('#neptune') ; 
        target.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2);
    }); 
}); 