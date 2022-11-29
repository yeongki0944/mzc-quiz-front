import {createAction, handleActions} from "redux-actions";


const SET_DATA = "SET_DATA";
const SET_CONTENT = "SET_CONTENT";
const SET_CURRENT_SHOW_PLAY = "SET_CURRENT_SHOW_PLAY";

export const setData = createAction(SET_DATA);
export const setContent = createAction(SET_CONTENT);
export const R_setCurrentShow_play = createAction(SET_CURRENT_SHOW_PLAY);

// 사용법
// setData({key:'~', value:'~'})
// setContent({key:'~', value:'~'})

const initialState = {
    quizPlay:{
        command: '',
        sender: '',
        quizNum : 1,
        content : {
            answer: '',
            solved_time: 0,
        }
    }
}

export const quizPlayReducer = handleActions({
    //신버전
    [SET_DATA]: (state, action) => {
        return {
            quizPlay: {
                ...state.quizPlay,
                [action.payload.key]: action.payload.value
            }
        }
    },
    [SET_CONTENT]: (state, action) => {
        return {
            quizPlay: {
                ...state.quizPlay,
                content: {
                    ...state.quizPlay.content,
                    [action.payload.key]: action.payload.value
                }
            }
        }
    },
    [SET_CURRENT_SHOW_PLAY]: (state, action) => {
        console.log(action.payload);
        return {
            quizPlay: {
                ...state.quizPlay,
                currentShow: action.payload
            }
        }
    }
}, initialState);
