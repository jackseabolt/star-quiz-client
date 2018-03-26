import React from 'react'; 
import { shallow } from 'enzyme'; 
import BoardHeader from '../components/BoardHeader/BoardHeader'; 

describe('BoardHeader', () => {
    it('renders without crashing', () => {
        shallow(<BoardHeader />);
    }); 
    it('contains title', () => {
        const wrapper = shallow(<BoardHeader />); 
        expect(wrapper.contains(<p className="global-header-darkback">Quizzes</p>)).toEqual(true); 
    }); 
    it('contains introduction text', () => {
        const wrapper = shallow(<BoardHeader />); 
        expect(wrapper.contains(<p className='global-paragraph-darkback'>Think you are a space trivia expert? 
        Put yourself to the challenge with one of our free quizzes!</p>)).toEqual(true)
    }); 
});