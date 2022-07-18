import axios from "axios";
import { Categoria } from "../models";
import { Filtro } from "../models/Filtro.interface";
import { Producto } from "../models/Producto.interface";

const baseUrl = 'https://ecomer-back.herokuapp.com';

export const getProducts = async (pageNo:number) => {

    try {
        const { data, status } = await axios.get<Producto[]>(`${baseUrl}/producto?pageNo=${pageNo}`)

        if (status === 200) return data;

        throw new Error("Error al consultar productos");

    } catch (error) {
        console.error(error);
    }
}

export const getFetchProduct = async (id:number) => {
    try {
        const { data, status } = await axios.get<Producto[]>(`${baseUrl}/producto/${id}`)
        // const producto = {...data};
        if (status === 200) return data;
        throw new Error("Error al consultar producto");
    } catch (error) {
        console.error(error);
        
    }
}

export const getProductosByWord = async (word:string) => {
    try {        
        if(!word) return []
        const { data, status } = await axios.get<Producto[]>(`${baseUrl}/producto/busqueda/${word}`)
        if (status === 200) return data;
        throw new Error("Error al consultar productos");
    } catch (error) {
        console.error(error);
    }
}

export const getCategories = async () => {
    try {
        const { data, status } = await axios.get<Categoria[]>(`${baseUrl}/producto/saludo/1`)
        if (status === 200) return data;
        throw new Error("Error al consultar categorias");
    } catch (error) {
        console.error(error);
    }
}

export const getFiltros = async (filtro:Filtro) => {
    try {
        const { data, status } = await axios.post<Producto[]>(`${baseUrl}/producto`, filtro)

        if (status === 201) return data;
        throw new Error("Error al consultar categorias");
    } catch (error) {
        console.log(error);
    }
}