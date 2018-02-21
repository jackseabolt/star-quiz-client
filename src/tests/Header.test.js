import React from 'react'; 
import Header from '../components/Header/Header'; 
import { shallow } from 'enzyme'; 

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />)
    }); 
}); 