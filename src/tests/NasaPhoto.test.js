import React from 'react'; 
import { Redirect } from 'react-router-dom'; 
import { NasaPhoto } from '../components/NasaPhoto/NasaPhoto'; 
import NasaPhotoInfo from '../components/NasaPhotoInfo/NasaPhotoInfo'; 
import { shallow, mount } from 'enzyme'; 

describe('NasaPhoto', () => {
    it('renders without crashing', () => {
        shallow(<NasaPhoto usingNasaPhoto={true}/>);
    }); 
    it('renders redirect if usingNasaPhoto is false', () => {
        const wrapper = shallow(<NasaPhoto />); 
        expect(wrapper.contains(<Redirect to="/" />)).toEqual(true); 
    }); 
    it('dispatches action is .nasa-photo-close is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NasaPhoto usingNasaPhoto={true} dispatch={spy}/>);
        wrapper.instance(); 
        const button = wrapper.find('.nasa-photo-close'); 
        button.simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('dispatches action is .nasa-photo-info is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NasaPhoto usingNasaPhoto={true} dispatch={spy}/>);
        wrapper.instance(); 
        const button = wrapper.find('.nasa-photo-info'); 
        button.simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    });
    it('displays NasaPhotoInfo component if infoOn prop is true', () =>  {
        const wrapper = shallow(<NasaPhoto usingNasaPhoto={true} infoOn={true} />); 
        expect(wrapper.contains(<NasaPhotoInfo />)).toEqual(true); 
    }); 
    it('displays photo info provided by props', () => {
        const wrapper = shallow(<NasaPhoto usingNasaPhoto={true} nasaImageTitle="title" nasaImageUrl="url"/>); 
        expect(wrapper.contains(<img className="nasa-photo" alt="title" src="url" />)).toEqual(true)
    }); 
}); 

