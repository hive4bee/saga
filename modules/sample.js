import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import {startLoading, finishLoading} from './loading';
import * as api from '../lib/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POSTS_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POSTS_FAILURE';

// const GET_USERS = 'sample/GET_USERS';
// const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

const UNLOAD_POST = 'sample/UNLOAD_POST';
const UNLOAD_POST_SUCCESS = 'sample/UNLOAD_POST_SUCCESS';
const UNLOAD_POST_FAILURE = 'sample/UNLOAD_POST_FAILURE';

export const getPost = createAction(GET_POST, id=>id);

// export const getUsers = createAction(GET_UESRS, id=>id);

export const unloadPost = createAction(UNLOAD_POST);

function* getPostSaga(action){
    yield put(startLoading(GET_POST));//로딩 시작
    //파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있다.
    try{
        const post = yield call(api.getPost,action.payload);//api.getPost(action.payload)
        yield put({
            type:GET_POST_SUCCESS,
            payload:post.data
        });
        console.log(post.data);
    }catch(e){
        yield put({
            type:GET_POST_FAILURE,
            payload:e,
        });
    }
    yield put(finishLoading(GET_POST))
}

export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga)
}

const initialState = {
    post:null,
    error:null
}

const posts = handleActions(
    {
        [GET_POST_SUCCESS]:(state,action)=>({
            ...state,
            post:action.payload
        }),
        [GET_POST_FAILURE]:(state,action)=>({
            ...state,
            error:action.payload
        }),
        [UNLOAD_POST]:()=>initialState
    },
    initialState
)

export default posts;