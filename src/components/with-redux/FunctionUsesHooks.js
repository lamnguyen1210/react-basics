import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPageData, increaseCount } from '../../actions/admin';

const FunctionUsesHooks = () => {
    const dispatch = useDispatch();
    const adminCount = useSelector(state => state.admin.count);
    const adminPageData = useSelector(state => state.admin.pageData);
    console.log(`adminPageData`, adminPageData)
    return (
        <div>
            <p>Admin count: {adminCount}</p>
            <button onClick={() => dispatch(increaseCount())}>Increment</button>
            <button onClick={() => dispatch(fetchPageData())}>fetch page data</button>
        </div>
    )
}

export default FunctionUsesHooks
