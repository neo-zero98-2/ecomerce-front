import { useEffect, useState } from 'react'
import logo from '../assets/nerv.png'
import { Producto } from '../models'
import { getProductosByWord } from '../services/FetchProducts'

type props = {
  productos:Producto[] | undefined,
  setProductos:  React.Dispatch<React.SetStateAction<Producto[] | undefined>>
}

export const Navbar = ({productos,setProductos}:props) => {

  const [word, setWord] = useState('')
  const [btnSearch, setBtnSearch] = useState(false)

  const handleSearch = (e: any) => {
    e.preventDefault();
    setBtnSearch(!btnSearch)
  }

  useEffect(() => {
    const loadProductos = async () => {
      const lista = await getProductosByWord(word);
      setProductos(lista);
      console.log(lista);
      setWord('');
    }
    loadProductos()

  }, [btnSearch])

  return (
    <nav className="navbar bg-dark ">
      <div className="container-fluid">
        <div className="col-2">
          <div className="container-fluid">
            <a className="navbar-brand text-light">
              <img src={logo}
                alt="" width="30" height="24" className="d-inline-block align-text-top" />
              
            </a>
          </div>
        </div>
        <div className="col-6">
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2"
              type="search" placeholder="Enter to search"
              aria-label="Search"
              value={word}
              onChange={event => setWord(event.target.value)} />
          </form>
        </div>
        <div className="col-2">

        </div>

      </div>
    </nav>
  )
}