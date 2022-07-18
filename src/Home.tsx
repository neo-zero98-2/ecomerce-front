
import { useEffect, useState } from 'react'
import './assets/styles.css'
import { Navbar, Corousel, Filters, ProductoComponent } from './components'
import { Producto } from './models'
import { getProducts } from './services/FetchProducts'

const Home = () => {
    const [productos, setProductos] = useState<Producto[] | undefined>([])

    // trae todos los productos paginados
    useEffect(() => {
        let pageNo = Math.floor((Math.random() * 4) + 1)
        console.log(pageNo);
        const loadProductos = async () => {
            const listProductos = await getProducts(pageNo)
            // setIsLoading(false)
            setProductos(listProductos)
        }
        setTimeout(loadProductos,1000)
    }, [])


    return (
        <>
            <Navbar productos={productos} setProductos={setProductos} />
            <Corousel />
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-3 mb-3">
                        <Filters productos={productos} setProductos={setProductos} />
                    </div>
                    <div className="col-md-9">
                        <ProductoComponent productos={productos} setProductos={setProductos} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home