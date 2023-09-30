import { useDispatch, useSelector } from "react-redux";
import { HigherOrderComponent } from "../../interfaces/HigherOrderComponentType"
import { Level } from "../../interfaces/redux-store/slices/LevelsTypes";
import { LevelsContext } from './LevelsContext';
import { ReduxDispatch, ReduxState } from "../../interfaces/redux-store";
import { useEffect } from "react";
import { getLevelsThunk } from "../../../store/thunks/levels.thunk";

export const LevelsProvider = ({ children }: HigherOrderComponent) => {
    const dispatch: ReduxDispatch = useDispatch();
    const levelsData = useSelector((state: ReduxState) => state.levels);
    const { alertData, apiResponse, errors, loadingStatus } = levelsData;

    const createLevel = (level: Level) => {

    };


    useEffect(() => {
        dispatch(getLevelsThunk({}));
    }, []);

    return (
        <LevelsContext.Provider value={{
            createLevel,
            levelsData
        }}>
            {children}
        </LevelsContext.Provider>
    )
}
