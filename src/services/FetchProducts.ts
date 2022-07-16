import axios from "axios";
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