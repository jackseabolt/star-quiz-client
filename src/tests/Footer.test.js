import React from 'react'; 
import Footer from '../components/Footer/Footer'; 
import { shallow } from 'enzyme'; 

describe('Footer', () => {
    it('renders without crashing', () => {
        shallow(<Footer />)
    }); 
}); 