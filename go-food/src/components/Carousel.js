import React from 'react';
import '../index.js'; // Ensure the CSS file is imported

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"cover !important"}}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white m-2 bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/300×300/?tacos" className="d-block w-100 object-fit-contain" style={{ filter: "brightness(30%)" }} alt="Burgers" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300/?Muffin" className="d-block w-100 object-fit-contain" style={{ filter: "brightness(30%)" }} alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300/?Burrito" className="d-block w-100 object-fit-contain" style={{ filter: "brightness(30%)" }} alt="Barbeque" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
