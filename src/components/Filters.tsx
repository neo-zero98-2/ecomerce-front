import { useEffect, useState } from "react"
import { Categoria, Producto } from "../models"
import { Filtro } from "../models/Filtro.interface"
import { getCategories, getFiltros } from "../services/FetchProducts"

type props = {
  productos:Producto[] | undefined,
  setProductos:  React.Dispatch<React.SetStateAction<Producto[] | undefined>>
}

export const Filters = ({productos, setProductos}: props) => {

  const [categories, setCategories] = useState<Categoria[] | undefined>([])
  
  // filtros 
  const [filter, setFilter] = useState<Filtro>({
    idCategoria: 1,
    existencia: 1,
    precioMinimo:0,
    precioMaximo: 0
  })

  // obtiene las categorias
  useEffect(() => {    
    const loadCategories = async() => {
      const list = await getCategories()
      setCategories(list)
    }
    loadCategories()    
  }, [])    

  // obtiene los productos por filtros
  useEffect(() => {
    const loadFilters = async() => {
      const datos = await getFiltros(filter);
      setProductos(datos);
      console.log(datos);
      
    }
    loadFilters()
  }, [filter])


  const setFilters = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form:any = e.target
    setFilter({
      idCategoria:  parseInt(form[0].value),
      existencia:   form[1].checked ? 1:0,
      precioMinimo: form[2].value ? parseInt(form[2].value):0,
      precioMaximo: form[3].value ? parseInt(form[3].value): 999999
    }) 
  } 
  
  return (
    <div className="card">
      <div className="card-body">

        <form onSubmit={setFilters}>
          <div className="mb-3">
            <label className="form-label">Filtros de busqueda</label>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <select className="form-select"
                      >
                {
                  categories && categories.map( ({idCategoria, nombre}) => (
                    <option key={idCategoria} value={idCategoria}>{ nombre}</option>
                  ))
                }                
              </select>
              <label>Categorias</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input disabled className="form-check-input" type="checkbox" 
                      defaultChecked 
                      />
              <label className="form-check-label">
                En existencia
              </label>
            </div>
          </div>
          <div className="row">
          <label className="form-label">Precio</label>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-xl-6 form-floating mb-3">
              <input type="number" className="form-control" min={0}
              />
              <label>Mínimo</label>
            </div>
            <div className="col-12 col-xl-6 form-floating mb-3">
              <input type="number" className="form-control" min={0}
              />
              <label>Máximo</label>
            </div>
          </div>
          <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Buscar</button>
          </div>
        </form>
      </div>
    </div>

  )
}