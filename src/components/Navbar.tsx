import logo from '../assets/nerv.png'
export const Navbar = () => {
  return (
    <nav className="navbar bg-dark ">
      <div className="container-fluid">
        <div className="col-2">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              <img src={logo} 
                  alt="" width="30" height="24" className="d-inline-block align-text-top"/>
               &nbsp; E -Comerce
            </a>
          </div>
        </div>
        <div className="col-6">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
        <div className="col-2">
        
        </div>

      </div>
    </nav>
  )
}