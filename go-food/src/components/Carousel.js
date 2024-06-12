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
            <img src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg" className="d-block w-100 object-fit-contain" style={{ filter: "brightness(30%)" }} alt="Burgers" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100 object-fit-contain" style={{ filter: "brightness(30%)" }} alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://www.idealancy.pk/images/product_gallery/1656491282_grill_bbq_2.jpg" className="d-block w-100 object-fit-contain" style={{ filter: "brightness(30%)" }} alt="Barbeque" />
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
