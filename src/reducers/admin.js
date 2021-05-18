import { INCREMENT, SET_PAGE_DATA, SET_PAGE_LOADING } from '../actions/types';

const INITIAL_STATE = {
    count: 0,
    pageData: {},
    pageLoading: false
}

const admin = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case SET_PAGE_DATA:
            return { ...state, pageData: action.payload };
        case SET_PAGE_LOADING:
            return { ...state, pageLoading: action.payload };
        default:
            return state;
    }
}

export default admin;