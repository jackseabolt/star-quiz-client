import { 
    SET_ALL_QUIZES, setAllQuizes,
    START_QUIZ, startQuiz, 
    SET_CURRENT_QUIZ_STATUS, setCurrentQuizStatus,
    CLEAR_QUIZ, clearQuiz, 
    SET_NASA_IMAGE, setNasaImage, 
    TOGGLE_NASA_IMAGE, toggleNasaImage, 
    QUIZ_LOADING, quizLoading
} from '../../actions/quiz';

describe('setAllQuizes', () => {
    it('has type of SET_ALL_QUIZES', () => {
        expect(setAllQuizes().type).toEqual(SET_ALL_QUIZES); 
    }); 
    it('has quizes of passed params', () => {
        expect(setAllQuizes("example").quizes).toEqual("example"); 
    }); 
}); 

describe('startQuiz', () => {
    it('has type of START_QUIZ', () => {
        expect(startQuiz().type).toEqual(START_QUIZ); 
    }); 
});

describe('setCurrentQuizStatus', () => {
    it('has type of SET_CURRENT_QUIZ_STATUS', () => {
        expect(setCurrentQuizStatus().type).toEqual(SET_CURRENT_QUIZ_STATUS); 
    }); 
    it('has quiz of passed params', () => {
        expect(setCurrentQuizStatus("example").quiz).toEqual("example"); 
    }); 
});

describe('clearQuiz', () => {
    it('has type of CLEAR_QUIZ', () => {
        expect(clearQuiz().type).toEqual(CLEAR_QUIZ); 
    }); 
});

describe('setNasaImage', () => {
    it('has type of SET_ALL_QUIZES', () => {
        expect(setNasaImage().type).toEqual(SET_NASA_IMAGE); 
    }); 
    it('has imageData of passed params', () => {
        expect(setNasaImage("example").imageData).toEqual("example"); 
    }); 
});

describe('toggleNasaImage', () => {
    it('has type of TOGGLE_NASA_IMAGE', () => {
        expect(toggleNasaImage().type).toEqual(TOGGLE_NASA_IMAGE); 
    }); 
});

describe('quizLoading', () => {
    it('has type of QUIZ_LOADING', () => {
        expect(quizLoading().type).toEqual(QUIZ_LOADING); 
    }); 
    it('has imageData of passed params', () => {
        expect(quizLoading("example").quizLoading).toEqual("example"); 
    }); 
});
