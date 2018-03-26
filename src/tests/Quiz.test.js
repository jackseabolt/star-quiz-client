import React from 'react'; 
import { Quiz } from '../components/Quiz/Quiz'; 
import { shallow } from 'enzyme'; 

describe('Quiz', () => {
    it('renders without crashing', () => {
        shallow(<Quiz usingQuiz={true} answers={[]}/>);
    }); 
});