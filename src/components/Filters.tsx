export const Filters = () => {
  return (
    <div className="card">
      <div className="card-body">

        <form>
          <div className="mb-3">
            <label className="form-label">Filtros de busqueda</label>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectGrid">
                {/* <option selected>Open this select menu</option> */}
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label>Categorias</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label">
                En existencia
              </label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-xl-6 form-floating mb-3">
              <input type="number" className="form-control" minLength={0}/>
              <label>Precio mínimo</label>
            </div>
            <div className="col-12 col-xl-6 form-floating mb-3">
              <input type="number" className="form-control" minLength={0}/>
              <label>Precio máximo</label>
            </div>
          </div>
          <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>

  )
}