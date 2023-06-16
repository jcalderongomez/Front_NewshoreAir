export interface IAirport {
        isSuccess:      boolean;
        result:         Airport[];
        displayMessage: string;
        errorMessage:   null;
    }
    
    export interface Airport{
        id:       number;
        name:     string;
        iataCode: string;
        location: string;
    }
    