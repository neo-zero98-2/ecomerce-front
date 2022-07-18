import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Producto } from '../models';

type props = {
    producto: Producto[] | undefined,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    show: boolean
}

export const ModalDetalle = ({ producto, show, setShow }: props) => {

    // botones de compra modal
    const [cantidad, setCantidad] = useState(1)
    const [variacion, setVariacion] = useState(0)

    // modal 
    const handleClose = () => {
        setShow(false)
        setCantidad(1)
        setVariacion(0)
    }
    return (
        <>
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
                                                producto.variaciones[variacion].fotos.map((foto, index) => (
                                                    <div key={foto.idFoto} className={`carousel-item${(index === 0) ? ' active' : ''}`}>
                                                        <img src={foto.link} className="d-block w-100 h-80" alt={index + ""} />
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

                                <div className="row mb-4 ">
                                    {
                                        producto.variaciones.length <= 0 && (
                                            <div className="col-12">
                                                <h5>Variciones</h5>
                                            </div>
                                        )
                                    }

                                    {
                                        producto.variaciones.length > 1 &&
                                        producto.variaciones.map((variacion, index) => (
                                            <div key={variacion.idVariacion} className="manoCursor col-sm-6 col-md-4 col-lg-3"
                                                onClick={() => {
                                                    setVariacion(index)
                                                }}>
                                                <span className="badge text-bg-primary">{variacion.nombre}</span>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-primary"
                                                onClick={() => {
                                                    if (cantidad <= 0) return
                                                    setCantidad(cantidad - 1)
                                                }}>-</button>
                                            <button type="button" className="btn btn-light">{cantidad}</button>
                                            <button type="button" className="btn btn-primary"
                                                onClick={() => {
                                                    const precio = parseInt(producto.precio + "")
                                                    if (cantidad >= producto.existencia) return
                                                    setCantidad(cantidad + 1)

                                                }}>+</button>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h3 style={{ marginLeft: "5rem" }} >MXN${cantidad * producto.precio} </h3>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>

                ))
            }
        </>
    )
}