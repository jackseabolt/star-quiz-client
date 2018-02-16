// REGULAR ACTIONS

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


// THUNK ACTIONS

export const getAllQuizes = () => dispatch => {
    return fetch('https://star-quizes-api.herokuapp.com/quiz/', 
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
    return fetch(`https://star-quizes-api.herokuapp.com/quiz/${title}/question/new`, 
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

export const answerQuiz = (title, answer, sessionId) => dispatch => {
    console.log(title, answer, sessionId)
    return fetch(`https://star-quizes-api.herokuapp.com/quiz/${title}/answer/${sessionId}`, 
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
        console.log("HERE IS THE QUIZ", quiz)
        if(quiz.quizLength) {
            return dispatch(setCurrentQuizStatus(quiz))
        } else {
            return console.error('Quiz has no questions!')
        }
    })
    .catch(err => console.error(err)); 
}

export const deleteSession = id => dispatch => {
    return fetch(`https://star-quizes-api.herokuapp.com/session/${id}`, 
        {
            method: 'DELETE'
        }
    )
    .then(() => dispatch(clearQuiz())) 
    .catch(err => console.error(err))
}
