import { Categoria } from "./Categoria.interface";
import { Variacion } from "./Variacion.interface";

export interface Producto {
    idProducto:  number;
    nombre:      string;
    descripcion: string;
    existencia:  number;
    precio:      number;
    cantidad:    number;
    fecha:       Date;
    variaciones: Variacion[];
    categoria:   Categoria;
}