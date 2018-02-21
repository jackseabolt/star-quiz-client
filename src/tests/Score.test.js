import React from 'react'; 
import { Score } from '../components/Score/Score'; 
import { shallow } from 'enzyme'; 

describe('Score', () => {
    it('renders without crashing', () => {
        shallow(<Score />); 
    })
})