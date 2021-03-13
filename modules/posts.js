import { createAction, handleActions } from 'redux-actions';

const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POST_FAILURE = 'posts/GET_POSTS_FAILURE';

const getPost = createAction(GET_POST)
const getPostSuccess = createAction(GET_POST_SUCCESS)
const getPostFailure = createAction(GET_POST_FAILURE)

initial