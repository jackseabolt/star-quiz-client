import { Board } from '../components/Board/Board'; 
import React from 'react'; 
import { shallow } from 'enzyme'; 

describe('Board', () => {
    it('renders without crashing', () => {
        shallow(<Board dispatch={() => {}} quizes={[]}/>)
    });
}); 