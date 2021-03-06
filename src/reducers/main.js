import { 
    SET_ALL_QUIZES,
    START_QUIZ, 
    SET_CURRENT_QUIZ_STATUS, 
    CLEAR_QUIZ, SET_NASA_IMAGE, 
    TOGGLE_NASA_IMAGE, 
    QUIZ_LOADING 
} from '../actions/quiz'; 
import { TOGGLE_INFO } from '../actions/functional'; 

export const initialState = {
    quizes: null,
    answers: [], 
    currentQuestion: null, 
    currentQuiz: null, 
    sessionId: null, 
    correctAnswer: null,
    response: null,  
    continue: true,
    score: null, 
    quizLength: null, 
    currentIndex: null,
    nasaImageUrl: false, 
    nasaImageExplanation: null, 
    nasaImageTitle: null, 
    usingNasaPhoto: false, 
    infoOn: false, 
    quizLoading: false, 
    started: false
}

export default function mainReducer(state = initialState, action) {
    if (action.type === SET_ALL_QUIZES) {
        return Object.assign({}, state, {
            quizes: action.quizes
        });
    }
    else if (action.type === START_QUIZ) {
        return Object.assign({}, state, {
            started: true
        });
    }
    else if (action.type === SET_CURRENT_QUIZ_STATUS) {
        return Object.assign({}, state, {
            question: action.quiz.question, 
            answers: action.quiz.answers,
            currentQuestion: action.quiz.question, 
            sessionId: action.quiz.sessionId, 
            currentQuiz: action.quiz.title, 
            correctAnswer: action.quiz.correct_answer,
            response: action.quiz.response, 
            continue: action.quiz.continue,
            quizLength: action.quiz.quizLength, 
            score: action.quiz.score, 
            currentIndex: action.quiz.current
        });
    }
    else if (action.type === CLEAR_QUIZ) {
        return Object.assign({}, state, {
            question: null, 
            answers: [],
            currentQuestion: null, 
            sessionId: null, 
            currentQuiz: null,
            correctAnswer: null,
            response: null, 
            continue: true, 
            quizLength: null, 
            score: null, 
            currentIndex: null, 
            infoOn: false, 
            started: false 
        });
    }
    else if (action.type === SET_NASA_IMAGE) {
        return Object.assign({}, state, {
            nasaImageUrl: action.imageData.url, 
            nasaImageExplanation: action.imageData.explanation, 
            nasaImageTitle: action.imageData.title
        });
    }
    else if (action.type === TOGGLE_NASA_IMAGE) {
        return Object.assign({}, state, {
            usingNasaPhoto: !state.usingNasaPhoto
        });
    }
    else if (action.type === TOGGLE_INFO) {
        return Object.assign({}, state, {
            infoOn: !state.infoOn
        });
    }
    else if (action.type === QUIZ_LOADING) {
        return Object.assign({}, state, {
            quizLoading: action.quizLoading
        });
    }
    return state;
}
