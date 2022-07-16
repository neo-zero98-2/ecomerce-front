import { Foto } from "./Foto.interface";

export interface Variacion {
    idVariacion: number;
    nombre:      string;
    fotos:       Foto[];
}
