export interface IRouteFlight {
    isSuccess:      boolean;
    result:         RouteFlight[];
    displayMessage: string;
    errorMessage:   null;
}

export interface RouteFlight{
    id:        number;
    routeName: string;
}
