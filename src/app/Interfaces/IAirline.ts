export interface IAirline {
    isSuccess:      boolean;
    result:         Airline[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Airline {
    Id:              number;
    nombre:             string;
    descripcion:        string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
}
