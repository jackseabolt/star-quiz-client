import React from 'react'; 
import { NasaPhotoInfo } from '../components/NasaPhotoInfo/NasaPhotoInfo'; 
import { shallow, mount } from 'enzyme'; 

describe('NasaPhotoInfo', () => {
    it('renders without crashing', () => {
        shallow(<NasaPhotoInfo />); 
    }); 
    it('dispatches action when close icon is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NasaPhotoInfo dispatch={spy} />); 
        const icon = wrapper.find('.nasa-photo-info-close'); 
        icon.simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('contains information passed by props', () => {
        const wrapper = shallow(<NasaPhotoInfo nasaImageTitle={'ex1'} nasaImageExplanation={'ex2'} />); 
        expect(wrapper.contains(<h4 className="global-paragraph-mini-darkback">ex1</h4>)).toEqual(true); 
        expect(wrapper.contains(<p className="global-paragraph-mini-darkback">ex2</p>)).toEqual(true); 
    });
}); 