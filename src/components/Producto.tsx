import moment from "moment"
import { useEffect, useState } from "react"
import { Producto } from "../models"
import { getFetchProduct, getProducts } from "../services/FetchProducts"
import { ModalDetalle } from "./Modal"
type props = {
  productos: Producto[] | undefined,
  setProductos: React.Dispatch<React.SetStateAction<Producto[] | undefined>>
}

export const ProductoComponent = ({ productos, setProductos }: props) => {

  const [idProducto, setIdProducto] = useState(0)
  const [producto, setProducto] = useState<Producto[] | undefined>([])

  // modal 
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true)

  // trae un producto por id
  useEffect(() => {
    if (!idProducto) return;
    const loadProducto = async () => {
      const producto = await getFetchProduct(idProducto)
      console.log(producto)
      setProducto(producto)
    }
    loadProducto()
  }, [idProducto])

  return (
    <>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
        {
          productos &&
          productos.map((producto: Producto) => (
            <div key={producto.idProducto} className="col manoCursor"
              onClick={() => {
                setIdProducto(producto.idProducto)
                handleShow()
              }}
            >
              <div className="card h-100">
                <img src={producto.variaciones[0].fotos[0].link} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title acortador">{producto.nombre}</h5>
                  <p className="card-text">
                    <span className="badge rounded-pill text-bg-primary">{producto.categoria.nombre}</span>
                  </p>
                  <h4 className="card-text">MXN${producto.precio}</h4>
                </div>
                <p className="card-text"><small className="text-muted">{moment(producto.fecha, "YYYYMMDD").fromNow()}</small></p>
              </div>
            </div>
          ))
        }
      </div>

      <ModalDetalle producto={producto} show={show} setShow={setShow}/>
    </>
  )
}