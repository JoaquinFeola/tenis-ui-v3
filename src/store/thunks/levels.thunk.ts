import { AxiosError } from "axios";
import { ReduxDispatch } from "../../interfaces/redux-store";
import { LevelsApiResponse } from "../../interfaces/redux-store/slices/LevelsTypes";
import { GetLevelsThunksRequest } from "../../interfaces/redux-store/thunks/LevelsThunksTypes";
import { TenisAPi } from "../api/tenisApi";
import { changeLoadingStatus, setApiData, setAlertData, setErrors } from "../slices/levels.slice";



export const getLevelsThunk = ({ }: GetLevelsThunksRequest) => {
    return async (dispatch: ReduxDispatch) => {
        dispatch(changeLoadingStatus({ getLoading: true }));
        try {
            const {
                codeStatus,
                data,
                excepcionError,
                hasErrors,
                message
            }: LevelsApiResponse = await TenisAPi.get('/nivel');

            dispatch(setApiData({ codeStatus, data, excepcionError, hasErrors, message }));
            dispatch(changeLoadingStatus({ getLoading: false }));
            dispatch(setAlertData({ message, open: true }));

        }
        catch (error: unknown | any) {
            console.error(error)
            dispatch(setErrors({ hasErrors: true, message: error.message }));
            dispatch(setAlertData({ message: error.message, open: true }));
            dispatch(changeLoadingStatus({ getLoading: false }));
            return error as AxiosError
        }
    }
};