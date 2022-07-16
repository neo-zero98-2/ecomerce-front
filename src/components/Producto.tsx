import moment from "moment"
import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { Producto } from "../models"
import { getFetchProduct, getProducts } from "../services/FetchProducts"

const getRandomInt = (max:number) => {
  return Math.floor(Math.random() * max);
}

export const ProductoComponent = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [productos, setProductos] = useState<Producto[] | undefined>([])
  const [countScroll, setCountScroll] = useState(1)
  const [idProducto, setIdProducto] = useState(0)
  const [producto, setProducto] = useState<Producto[] | undefined>([])

  // botones de compra
  const [cantidad, setCantidad] = useState(1)
  const [total, setTotal] = useState(0);

  // modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // trae todos los productos paginados
  useEffect(() => {
    let pageNo = Math.abs((getRandomInt(4)))
    if(pageNo === 0) pageNo = 1
    const loadProductos = async () => {
      const listProductos = await getProducts(pageNo)
      setIsLoading(false)
      setProductos(listProductos)
    }
    loadProductos()
  }, [])

  // trae un producto por id
  useEffect(() => {

    if (!idProducto) return;

    const loadProducto = async () => {
      const producto = await getFetchProduct(idProducto)
      console.log(producto)
      setProducto(producto)
      if(producto) setTotal(producto[0].precio)
    }
    loadProducto()
  }, [idProducto])

  return (
    <>
      <button className="btn button-secondary" onClick={handleShow}></button>
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

      {
        producto && producto.map(producto => (
          <div key={producto.idProducto}>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{producto.nombre}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {
                        producto.variaciones[0].fotos.map(foto => (
                          <div key={foto.idFoto} className={`carousel-item${(foto.idFoto === 1) ? '' : ' active'}`}>
                            <img src={foto.link} className="d-block w-100 h-80" alt="..." />
                          </div>
                        ))
                      }
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <p>{producto.descripcion} </p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-primary" 
                      onClick={()=>{
                        if(cantidad <= 0) return
                        setCantidad(cantidad-1)
                        setTotal(producto.precio*(cantidad-1))
                      }}>-</button>
                      <button type="button" className="btn btn-light">{cantidad}</button>
                      <button type="button" className="btn btn-primary"
                      onClick={()=>{
                        if(cantidad === producto.existencia) return
                        setCantidad(cantidad+1)
                        setTotal(producto.precio*cantidad)
                      }}>+</button>
                    </div>
                  </div>
                  <div className="col">
                    <h3 style={{marginLeft: "5rem"}} >MXN${total} </h3>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

        ))
      }
    </>
  )
}