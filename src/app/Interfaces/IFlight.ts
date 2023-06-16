export interface IFlight {
    isSuccess:      boolean;
    result:         Flight[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Flight {
    id:               number;
    airportOriginId:  number;
    airportDestineId: number;
    departureTime:    string;
    arrivalTime:      string;
    routeFlightId:    number;
    routeFlight:      RouteFlight;
    airportOrigin:    null;
    airportDestine:   null;
}

export interface RouteFlight {
    id:        number;
    routeName: string;
}
