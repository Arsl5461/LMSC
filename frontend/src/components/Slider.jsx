import React from 'react'
import Slide1 from "../assets/slide1.webp"
import Slide2 from "../assets/slide2.webp"

function Slider() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active h-50" data-bs-interval="2000">
      <img src={Slide1} class="d-block w-100 slideHeight" alt="..."/>
      <div class="carousel-caption ">
        <h1><b>Clear Relateable And Informative Testing Results</b> </h1>
        <p><b>We are continually harnessing our medical expertise to build best test offering while investing in technology to transform the delivery of health care.</b></p>

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Slide2} class="d-block w-100 slideHeight" alt="..."/>
      <div class="carousel-caption">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider