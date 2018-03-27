import { 
    SET_ALL_QUIZES,
    START_QUIZ, 
    SET_CURRENT_QUIZ_STATUS, 
    CLEAR_QUIZ, SET_NASA_IMAGE, 
    TOGGLE_NASA_IMAGE, 
    QUIZ_LOADING 
} from '../../actions/quiz'; 
import { TOGGLE_INFO } from '../../actions/functional'; 
import mainReducer from '../../reducers/main'; 
import { initialState } from '../../reducers/main'; 

describe('mainReducer', () => {
    it('SET_ALL_QUIZES - returns action quizes in state', () => { 
        const action = { quizes: 'test', type: SET_ALL_QUIZES }
        expect(mainReducer(initialState, action).quizes).toEqual('test'); 
    });
    it('START_QUIZ - returns action started in state', () => { 
        const action = { type: START_QUIZ }
        expect(mainReducer(initialState, action).started).toEqual(true); 
    });
    it('SET_CURRENT_QUIZ_STATUS - returns action quiz information in state', () => { 
        const action = { 
            type: SET_CURRENT_QUIZ_STATUS,
            quiz: {
                question: 'testQuestion', 
                answers: 'testAnswers',
                sessionId: 'testSessionId', 
                title: 'testCurrentQuiz', 
                correct_answer: 'testCorrectAnswer',
                response: 'testResponse', 
                continue: 'testContinue',
                quizLength: 'testQuizLength', 
                score: 'testScore', 
                current: 'testCurrentIndex'
            } 
        }
        expect(mainReducer(initialState, action).question).toEqual('testQuestion'); 
        expect(mainReducer(initialState, action).answers).toEqual('testAnswers');
        expect(mainReducer(initialState, action).currentQuestion).toEqual('testQuestion');
        expect(mainReducer(initialState, action).sessionId).toEqual('testSessionId');  
        expect(mainReducer(initialState, action).currentQuiz).toEqual('testCurrentQuiz');
        expect(mainReducer(initialState, action).correctAnswer).toEqual('testCorrectAnswer');  
        expect(mainReducer(initialState, action).response).toEqual('testResponse');   
        expect(mainReducer(initialState, action).continue).toEqual('testContinue');   
        expect(mainReducer(initialState, action).quizLength).toEqual('testQuizLength');
        expect(mainReducer(initialState, action).score).toEqual('testScore');
        expect(mainReducer(initialState, action).currentIndex).toEqual('testCurrentIndex');         
    });
    it('CLEAR_QUIZ - returns cleared state', () => { 
        const action = { type: CLEAR_QUIZ }
        expect(mainReducer(initialState, action).question).toEqual(null); 
        expect(mainReducer(initialState, action).answers).toEqual([]);
        expect(mainReducer(initialState, action).currentQuestion).toEqual(null);
        expect(mainReducer(initialState, action).sessionId).toEqual(null);  
        expect(mainReducer(initialState, action).currentQuiz).toEqual(null);
        expect(mainReducer(initialState, action).correctAnswer).toEqual(null);  
        expect(mainReducer(initialState, action).response).toEqual(null);   
        expect(mainReducer(initialState, action).continue).toEqual(true);   
        expect(mainReducer(initialState, action).quizLength).toEqual(null);
        expect(mainReducer(initialState, action).score).toEqual(null);
        expect(mainReducer(initialState, action).currentIndex).toEqual(null);
        expect(mainReducer(initialState, action).infoOn).toEqual(false);
        expect(mainReducer(initialState, action).started).toEqual(false);
    });
    it('SET_NASA_IMAGE - returns with nasa image info in state', () => { 
        const imageData = {
            url: 'testUrl', 
            explanation: 'testExplanation',
            title: 'testTitle'
        }
        const action = { type: SET_NASA_IMAGE, imageData }
        expect(mainReducer(initialState, action).nasaImageUrl).toEqual('testUrl'); 
        expect(mainReducer(initialState, action).nasaImageExplanation).toEqual('testExplanation'); 
        expect(mainReducer(initialState, action).nasaImageTitle).toEqual('testTitle'); 
    });
    it('TOGGLE_NASA_IMAGE - returns opposite usingNasaPhoto in state', () => { 
        const action = { type: TOGGLE_NASA_IMAGE }
        expect(mainReducer(initialState, action).usingNasaPhoto).toEqual(true); 
    });
    it('TOGGLE_INFO - returns opposite infoOn in state', () => { 
        const action = { type: TOGGLE_INFO }
        expect(mainReducer(initialState, action).infoOn).toEqual(true); 
    });
    it('QUIZ_LOADING - returns opposite infoOn in state', () => { 
        const action = { type: QUIZ_LOADING, quizLoading: 'test' }
        expect(mainReducer(initialState, action).quizLoading).toEqual('test'); 
    });
});