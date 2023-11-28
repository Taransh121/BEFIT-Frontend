import { TrainerConstants } from '../Actions/ConstantsAction';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const trainerReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case TrainerConstants.getAllTrainers_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TrainerConstants.getAllTrainers_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        case TrainerConstants.getAllTrainers_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default trainerReducer;