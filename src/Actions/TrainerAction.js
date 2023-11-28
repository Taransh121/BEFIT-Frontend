import axios from 'axios';
import { TrainerConstants } from './ConstantsAction';

export const getAllTrainers = () => {
    return async (dispatch) => {
        dispatch({ type: TrainerConstants.getAllTrainers_REQUEST });
        const res = await axios.get("http://localhost:8080/trainer/getAllTrainers");
        // console.log(res);
        if (res.status === 200) {
            dispatch({
                type: TrainerConstants.getAllTrainers_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: TrainerConstants.getAllTrainers_FAILURE,
                payload: { error: res.data.error },
            });
        }
    };
};
