import React from 'react'; 
import BoardPost from '../components/BoardPost/BoardPost'; 
import { shallow } from 'enzyme'; 

describe('BoardPost', () => {
    it('renders without crashing', () => {
        const fakeQuiz = {image: 'fakeurl.com'}
        shallow(<BoardPost quiz={fakeQuiz}/>)
    }); 
}); 