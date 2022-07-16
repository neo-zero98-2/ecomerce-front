
export const Corousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src="https://ecoevents.blob.core.windows.net/comprandoando/usr1/0.663462001656607204hotel_senorialpng.png" 
              className="d-block w-100 " alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://ecoevents.blob.core.windows.net/comprandoando/usr1/0.645314001655398543img20220616wa0011jpg.jpg" 
                className="d-block w-100 " alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}