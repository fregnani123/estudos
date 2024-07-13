

export const increment = (counterId) => {
    return {
        type: 'INCREMENT',
        payload: counterId
    };
};

export const decrement = (counterId) => {
    return {
        type: 'DECREMENT',
        payload: counterId
    };
};

