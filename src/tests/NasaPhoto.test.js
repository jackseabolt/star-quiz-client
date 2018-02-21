import React from 'react'; 
import { NasaPhoto } from '../components/NasaPhoto/NasaPhoto'; 
import { shallow } from 'enzyme'; 

describe('NasaPhoto', () => {
    it('renders without crashing', () => {
        shallow(<NasaPhoto usingNasaPhoto={true}/>);
    }); 
}); 