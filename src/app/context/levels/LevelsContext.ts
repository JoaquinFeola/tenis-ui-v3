import { createContext } from "react";
import { Level, LevelsInitialState } from "../../interfaces/redux-store/slices/LevelsTypes";

interface LevelsContextProps {
    createLevel: (level: Level) => void;
    levelsData: LevelsInitialState;
}


export const LevelsContext = createContext({} as LevelsContextProps);