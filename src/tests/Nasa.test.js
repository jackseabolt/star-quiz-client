import React from 'react'; 
import { Nasa } from '../components/Nasa/Nasa'; 
import { shallow, mount } from 'enzyme'; 

describe('Nasa', () => {
    it('renders without crashing', () => {
        shallow(<Nasa dispatch={() => {}}/>);
    });
    it('dispatches action when component mounts to retrieve image', () => {
        const spy = jest.fn(); 
        const wrapper = shallow(<Nasa dispatch={spy} />); 
        expect(spy).toHaveBeenCalledTimes(1); 
    }); 
    it('displays alternative div if image data is not loaded', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Nasa dispatch={spy} />);
        wrapper.instance();
        const target = wrapper.find('.nasa-image'); 
        expect(target.exists()).toEqual(false); 
    }); 
    it('displays image if image data is loaded', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Nasa dispatch={spy} nasaImageUrl={'myurl'} />);
        wrapper.instance();
        const target = wrapper.find('.nasa-image'); 
        expect(target.exists()).toEqual(true); 
    })
    it('dispatched action when image is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Nasa dispatch={spy} nasaImageUrl={'myurl'} />);
        wrapper.instance(); 
        const image = wrapper.find('.nasa-image'); 
        image.simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2); 
    }); 
    it('contains expected text', () => {
        const wrapper = mount(<Nasa dispatch={() => {}} />); 
        const target = wrapper.find('.global-header-lightback'); 
        expect(target.exists()).toEqual(true); 
    }); 
}); 