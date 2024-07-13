import { combineReducers } from 'redux';

const initialState1 = { count: 0 };
const initialState2 = { count: 0 };
const initialState3 = { count: 0 };

const counter1Reducer = (state = initialState1, action) => {
    if (action.payload !== 'counter1') return state;
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const counter2Reducer = (state = initialState2, action) => {
    if (action.payload !== 'counter2') return state;
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
const counter3Reducer = (state = initialState3, action) => {
    if (action.payload !== 'counter2') return state;
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default combineReducers({
    counter1: counter1Reducer,
    counter2: counter2Reducer,
    counter3: counter3Reducer
});
