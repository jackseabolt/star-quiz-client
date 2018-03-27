import { toggleInfo, TOGGLE_INFO } from '../../actions/functional';

describe('toggleInfo', () => {
    it('returns an action with type TOGGLE_INFO', () => {
        expect(toggleInfo().type).toEqual(TOGGLE_INFO); 
    }); 
}); 