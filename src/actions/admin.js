import { INCREMENT, SET_PAGE_DATA, SET_PAGE_LOADING } from './types';

export const increaseCount = () => {
    return { type: INCREMENT };
}

export const setPageData = (data) => {
    return {
        type: SET_PAGE_DATA,
        payload: data
    };
}

export const setPageLoading = (isLoading) => {
    return {
        type: SET_PAGE_LOADING,
        payload: isLoading
    };
}

export const fetchPageData = () => {
    return (dispatch) => {
        dispatch(setPageLoading(true));

        setTimeout(() => {
            let pageData = {
                a: '123',
                b: 'bcd'
            };

            dispatch(setPageData(pageData));
            dispatch(setPageLoading(false));
        }, 1500);
    }
}