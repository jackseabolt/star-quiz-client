import { SET_ALL_QUIZES, SET_CURRENT_QUIZ_STATUS, CLEAR_QUIZ } from '../actions/quiz'; 

const initialState = {
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
    currentIndex: null
}

export default function mainReducer(state = initialState, action) {
    if (action.type === SET_ALL_QUIZES) {
        return Object.assign({}, state, {
            quizes: action.quizes
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
        })
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
            currentIndex: null
        })
    }
    return state;
}
