import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ backgroundColor: 'white', color: 'navy' }}>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "cover !important" }}>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              </div>
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
      <div className='container'>
        {foodCat.length > 0 ? (
          <div>
            {foodCat.map((data, index) => (
              <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}
                <hr />
                <div className="row">
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                      .map((filterItems) => (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem={filterItems}
                            options={filterItems.options[0]}
                          />
                        </div>
                      ))
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
