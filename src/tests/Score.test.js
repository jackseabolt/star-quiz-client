import React from 'react'; 
import { Score } from '../components/Score/Score'; 
import { shallow } from 'enzyme'; 

describe('Score', () => {
    it('renders without crashing', () => {
        shallow(<Score />); 
    }); 
    it('displays information passed by props', () => {
        const wrapper = shallow(<Score score="2" currentIndex="4"/>)
        expect(wrapper.contains(<h4 className="score-text">Score: 2/4</h4>)).toEqual(true); 
    }); 
    it('contains class .score-container', () => {
        const wrapper = shallow(<Score />); 
        const target = wrapper.find('.score-container'); 
        expect(target.exists()).toEqual(true); 
    }); 
});