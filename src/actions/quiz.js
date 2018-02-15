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


// THUNK ACTIONS

export const GET_ALL_QUIZES = 'GET_ALL_QUIZES'; 
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

export const GET_NEW_QUIZ = 'GET_NEW_QUIZ'; 
export const getNewQuiz = title => dispatch => {
    console.log("TITLE: ", title)
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