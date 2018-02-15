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
        return Promise.reject() 
    }); 
}; 

export const SET_ALL_QUIZES = 'SET_ALL_QUIZES'; 
export const setAllQuizes = (quizes) => {
    return {
    type: SET_ALL_QUIZES, 
    quizes
}}; 

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
    })
    .catch(err => console.error(err))
}