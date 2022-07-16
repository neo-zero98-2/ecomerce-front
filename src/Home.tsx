
import './assets/styles.css'
import {Navbar, Corousel, Filters, ProductoComponent} from './components'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Corousel/>
        <div className="container">
            <div className="row mt-2">
                <div className="col-md-3 mb-3">
                    <Filters/>
                </div>
                <div className="col-md-9">
                    <ProductoComponent/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home