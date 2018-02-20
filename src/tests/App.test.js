import { App } from '../components/App/App'; 
import React from 'react'; 
import { shallow } from 'enzyme'; 


describe('App' , () => {
    it('renders without crashing', () => {
        shallow(<App />); 
    })
})