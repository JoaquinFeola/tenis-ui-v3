import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LevelsApiResponse, LevelsInitialState } from '../../app/interfaces/redux-store/slices/LevelsTypes';
import { LoadingStatus } from '../../app/interfaces/LoadingStatusType';



const initialState: LevelsInitialState = {
  apiResponse: {
    codeStatus: 200,
    data: [],
    excepcionError: '',
    hasErrors: false,
    message: '',
  },

  errors: {
    hasErrors: false,
    message: '',
  },
  loadingStatus: {
    deleteLoading: false,
    getLoading: false,
    putLoading: false,
    postLoading: false
  },
  alertData: {
    message: '',
    open: false,
  },
};

export const levelSlice = createSlice({
  name: 'Levels',
  initialState,
  reducers: {
    changeLoadingStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.loadingStatus = { ...state.loadingStatus, ...action.payload };
    },
    setApiData: (state, action: PayloadAction<LevelsApiResponse>) => {
      state.apiResponse = action.payload
    },
    setErrors: (state, action: PayloadAction<{ hasErrors: boolean; message: string; }>) => {
      state.errors = action.payload;
    },
    setAlertData: (state, action: PayloadAction<{ message: string; open: boolean }>) => {
      state.alertData = action.payload;
    }

  }
});

export const { changeLoadingStatus, setApiData, setErrors, setAlertData } = levelSlice.actions;

