<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators carousel-indicators-home">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/slide.png" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h1 class="font">120 Anastasia Avenue, Coral Gables</h1>
          <div class="df">
            <h3 class="font">$625,000</h3>
            <button class="button">MORE INFO</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/abstrakciya-7680x4320-abstrakciya-21256.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h1 class="font">120 Anastasia Avenue, Coral Gables</h1>
          <div class="df">
            <h3 class="font">$625,000</h3>
            <button class="button">MORE INFO</button>
          </div>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="../assets/img/js.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h1 class="font">120 Anastasia Avenue, Coral Gables</h1>
          <div class="df">
            <h3 class="font">$625,000</h3>
            <button class="button">MORE INFO</button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carusel",
};
</script>

<style lang="scss" scoped>
.carousel-item {
  height: 85vh;
}
.carousel-indicators-home {
  padding-bottom: 150px;
}
.df {
  display: flex;
  justify-content: space-evenly;
  padding: 0 280px 0 280px;
}
.font {
  font-weight: 400;
}
.button {
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  background-color: #707070b4;
}
.button:hover{
    cursor: pointer;
}
</style>
