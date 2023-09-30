import { LoadingStatus } from '../../LoadingStatusType';
export interface Level {
    id?: number;
    nombre?: string;
    fechaAlta?: Date | null;
    fechaBaja?: Date | null;
    fechaModificacion?: Date | null;
    activo?: boolean;
}

export interface LevelsApiResponse {
    data: Level[];
    codeStatus: number;
    message: string;
    hasErrors: boolean;
    excepcionError: string;
}

export interface LevelsInitialState {
    loadingStatus: LoadingStatus
    apiResponse: LevelsApiResponse;
    errors: {
        hasErrors: boolean;
        message: string;
    };
    alertData: {
        open: boolean;
        message: string;
    };


};