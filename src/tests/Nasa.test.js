import React from 'react'; 
import { Nasa } from '../components/Nasa/Nasa'; 
import { shallow } from 'enzyme'; 

describe('Nasa', () => {
    it('renders without crashing', () => {
        shallow(<Nasa dispatch={() => {}}/>);
    }); 
}); 