import {API_BASE_URL} from '../config';

// REGULAR ACTIONS

console.log("API: ", API_BASE_URL)

export const SET_ALL_QUIZES = 'SET_ALL_QUIZES'; 
export const setAllQuizes = quizes => ({
    type: SET_ALL_QUIZES, 
    quizes
});

export const SET_CURRENT_QUIZ_STATUS = 'SET_CURRENT_QUIZ_STATUS'; 
export const setCurrentQuizStatus = quiz => ({
    type: SET_CURRENT_QUIZ_STATUS, 
    quiz
}); 

export const CLEAR_QUIZ = 'CLEAR_QUIZ'; 
export const clearQuiz = () => ({
    type: CLEAR_QUIZ, 
}); 

export const SET_NASA_IMAGE = 'SET_NASA_IMAGE'; 
export const setNasaImage = imageData => ({
    type: SET_NASA_IMAGE, 
    imageData
}); 

export const TOGGLE_NASA_IMAGE = 'TOGGLE_NASA_IMAGE'; 
export const toggleNasaImage = () => ({
    type: TOGGLE_NASA_IMAGE, 
}); 


// THUNK ACTIONS

export const getAllQuizes = () => dispatch => {
    console.log("IT FIRED")
    return fetch(`${API_BASE_URL}/quiz/`, 
        {
            method: 'GET', 
        }
    )
    .then(res => res.json())
    .then(quizes => {
        return dispatch(setAllQuizes(quizes.quizes))
    })
    .catch(err => {
        console.error(err); 
        return Promise.reject();  
    }); 
}; 
 
export const getNewQuiz = title => dispatch => {
    return fetch(`${API_BASE_URL}/quiz/${title}/question/new`, 
        {
            method: 'GET'
        }
    )
    .then(res => res.json())
    .then(quiz => {
        console.log("HERE IS THE QUIZ", quiz)
        if(quiz.quizLength) {
            return dispatch(setCurrentQuizStatus(quiz))
        } else {
            return console.error('Quiz has no questions!')
        }
    })
    .catch(err => console.error(err)); 
}

export const getNewQuestion = (title, sessionId) => dispatch => {
    return fetch(`${API_BASE_URL}/quiz/${title}/question/${sessionId}`, 
        {
            method: 'GET'
        }
    )
    .then(res => res.json())
    .then(quiz => {
        if(quiz.quizLength) {
            return dispatch(setCurrentQuizStatus(quiz))
        } else {
            return console.error('Quiz has no questions!')
        }
    })
    .catch(err => console.error(err)); 
}

export const answerQuiz = (title, answer, sessionId) => dispatch => {
    console.log(title, answer, sessionId)
    return fetch(`${API_BASE_URL}/quiz/${title}/answer/${sessionId}`, 
        {
            method: 'POST', 
            body: JSON.stringify({
                answer
            }), 
            headers: {
               'Content-Type': 'application/json' 
            }
        }
    )
    .then(res => res.json())
    .then(quiz => {
        if(quiz.quizLength) {
            return dispatch(setCurrentQuizStatus(quiz))
        } else {
            return console.error('Quiz has no questions!')
        }
    })
    .catch(err => console.error(err)); 
}

export const deleteSession = id => dispatch => {
    return fetch(`${API_BASE_URL}/session/${id}`, 
        {
            method: 'DELETE'
        }
    )
    .then(() => dispatch(clearQuiz())) 
    .catch(err => console.error(err))
}

export const getNasaImage = () => dispatch => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=IBNbXHbyn8pC2k9EVxumOUauFaccdzinCD0WJcSA', 
    {
        method: 'GET'
    })
    .then(res => res.json())
    .then(imageData => {
        console.log(imageData)
        dispatch(setNasaImage(imageData))
    }); 
}
