import React from 'react'; 
import Welcome from '../components/Welcome/Welcome'; 
import { shallow } from 'enzyme'; 

describe('Welcome', () => {
    it('renders without crashing', () => {
        shallow(<Welcome />); 
    }); 
}); 