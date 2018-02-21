import React from 'react'; 
import { shallow } from 'enzyme'; 
import BoardHeader from '../components/BoardHeader/BoardHeader'; 

describe('BoardHeader', () => {
    it('renders without crashing', () => {
        shallow(<BoardHeader />)
    }); 
}); 