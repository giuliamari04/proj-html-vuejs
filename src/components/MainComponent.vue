<template>
  <section id="our-products" class="p-5 m-5">
    <div class="row">
      <div class="col-4 py-5">
        <h3 class="subtitle">our products</h3>
        <h1 class="title py-3">
          All our delectable pastries are backed fresh in our Kitchen every
          morning, and are made with all-natural, all organic ingredients.
        </h1>
        <button class="btn btn-purple px-4 py-2">Buy Avada Today!</button>
      </div>
      <div class="col">
        <div class="container">
          <div class="slider-wrapper d-flex align-items-center overflow-hidden">
            <button
              id="prev-slide"
              class="slide-button btn-purple p-3 material-symbols-rounded position-absolute btn-left"
              @click="slide(-2)"
            >
              <i class="fa-solid fa-chevron-right fa-rotate-180"></i>
            </button>
            <ul
              class="image-list d-flex p-0 m-0"
              :style="{ transform: `translateX(${traslateX}px)` }"
            >
              <li
                v-for="(pastries, index) in store.pastries.slice(0, 4)"
                :key="index"
                class="px-2"
              >
                <CardComponent
                  :img="pastries.img"
                  :name="pastries.name"
                  :category="pastries.catcategory"
                  :type="pastries.type"
                  :firstPrice="pastries.firstPrice"
                  :secondPrice="pastries.secondPrice"
                />
              </li>
            </ul>
            <button
              id="next-slide"
              class="slide-button btn-purple p-3 material-symbols-rounded position-absolute btn-right"
              @click="slide(-2)"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="special-moments" class="p-5 m-5">
    <div class="d-flex flex-column text-center justify-content-center m-3">
      <h3 class="subtitle">corporate & weddings</h3>
      <h1 class="title">Baking Special Moments</h1>
    </div>

    <div class="row mt-5">
      <!-- prima immagine -->
      <div class="col">
        <div class="position-relative">
          <div class="corporate-div"></div>
          <div
            class="corporate-div-hover d-flex flex-column justify-content-center align-items-center align-content-center text-light"
          >
            <h5 class="fs-6 fw-lighter">International Bakery</h5>
            <h1 class="title text-light">Corporate Events</h1>
            <button class="btn btn-purple">Explore more</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="position-relative">
          <div class="weddings-div"></div>
          <div
            class="weddings-div-hover d-flex flex-column justify-content-center align-items-center align-content-center text-light"
          >
            <h5 class="fs-6 fw-lighter">Private Dining Hall</h5>
            <h1 class="title text-light">Weddings & Parties</h1>
            <button class="btn btn-purple">Explore more</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="find-products" class="p-5 m-5">
    <div class="row">
      <div class="col-4">
        <h1 class="title">Find a freshly baked product perfect for you</h1>
        <p class="py-3">
          Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis
          at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.
        </p>
        <button class="btn btn-purple px-4 py-2">Shop All Products</button>
      </div>
      <div class="col bg-black">
        <div class="slider-container">
          <!-- <Carousel :perPage="4" :paginationEnabled="false">
            <Slide v-for="(pastry, index) in store.pastry" :key="index">
              <Contenuto di ogni singola slide 
              <div class="card" >
                <img :src="'/image/' + pastry.img + '400x510.jpg'" class="card-img-top" alt="img" />
                <div class="card-body">
                  <p class="card-text">
                   {{ pastry.catcategory }}
                  </p>
                </div>
              </div>

            </Slide>
          </Carousel> -->
        </div>
      </div>
    </div>
  </section>
  <section id="info" class="px-5">
    <div class="row p-5 position-relative">
      <div class="col bg-row-01"></div>
      <div class="row position-absolute p-5 bg-purple">
        <div class="col">
          <h1 class="title text-light my-fs">Tell us what you have in mind</h1>
        </div>
        <div class="col text-light d-flex flex-column">
          <div class="text-end">
            <h3 class="my-fs fw-light">01</h3>
          </div>
          <div class="d-flex flex-column mt-auto">
            <h3 class="subtitle fw-light">MANUAL INGREDIENTS SELECTION</h3>
            <p>
              Cras consequat lectus vestibulum tortor pulvinar, quis euismod
              nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis
              sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
              lorem erat, finibus in velit placerat, rutrum augue.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 px-5 position-relative">
        <div class="col bg-row-02"></div>
        <div
          class="col position-absolute z-1 text-light d-flex flex-column p-5"
        >
          <div class="d-flex p-4">
            <h1 class="title text-light my-fs w-50">We Start Baking</h1>
            <h3 class="my-fs fw-light text-end w-50">02</h3>
          </div>
          <div class="mt-auto p-4">
            <h3 class="subtitle fw-light">SWEET & DELICIOUS</h3>
            <p>
              Cras consequat lectus vestibulum tortor pulvinar, quis euismod
              nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis
              sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
              lorem erat, finibus in velit placerat, rutrum augue.
            </p>
          </div>
        </div>
      </div>
      <div class="col px-5 bg-light-gray mx-3 py-4">
        <h3 class="subtitle">DONT JUST TAKE OUR WORD FOR IT</h3>
        <h1 class="title my-fs-2">
          “Finally found an alternative to the mass produced products. Something
          that incorporates real organic ingredients, nutrient dense wellness
          while promoting sustainability and activity.”
        </h1>
        <p>Rachel Cooper, Founder</p>
      </div>
    </div>
    <div class="row p-5 position-relative">
      <div class="col bg-row-03"></div>
      <div class="row position-absolute p-5 bg-purple">
        <div class="col">
          <h1 class="title text-light my-fs">Delivered to your home</h1>
        </div>
        <div class="col text-light d-flex flex-column">
          <div class="text-end">
            <h3 class="my-fs fw-light">03</h3>
          </div>
          <div class="d-flex flex-column mt-auto">
            <h3 class="subtitle fw-light">BAKED TO ORDER & GIFT WRAPPED</h3>
            <p>
              Cras consequat lectus vestibulum tortor pulvinar, quis euismod
              nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis
              sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
              lorem erat, finibus in velit placerat, rutrum augue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="locations" class="p-5 m-5">
    <div class="text-center pb-5">
      <h3 class="subtitle">locations</h3>
      <h1 class="title">Visit our Bakeries</h1>
    </div>
    <div class="row">
      <div class="col m-0 p-0 overflow-hidden ">
        <div class="card border-0  overflow-hidden rounded-0 bg-light-gray " >
            <div class="img-newyork img-zoom"></div>
          <div class="card-body overflow-hidden ">
            <div class="card-text">
             <h1 class="title text-center fs-2 py-3">New York</h1>
             <div class="row">
                <div class="col text-center">
                    <h3 class="subtitle">CALL US</h3>
                    <h3 class="fs-6 fw-light ">1.800.458.556</h3>
                </div>
                <div class="col text-center">
                    <h3 class="subtitle">OPEN ALL WEEK</h3>
                    <h3 class="fs-6 fw-light ">9:00 AM – 6:00 PM</h3>
                </div>
                <div class="col text-center ">
                    <button class="btn btn-white">View Map</button>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col m-0 p-0 overflow-hidden ">
        <div class="card border-0  overflow-hidden rounded-0 my-bg-light-pink  " >
            <div class="img-london img-zoom"></div>
          <div class="card-body overflow-hidden ">
            <div class="card-text ">
             <h1 class="title text-center fs-2 py-3">London</h1>
             <div class="row">
                <div class="col text-center">
                    <h3 class="subtitle">CALL US</h3>
                    <h3 class="fs-6 fw-light ">1.800.458.556</h3>
                </div>
                <div class="col text-center">
                    <h3 class="subtitle">OPEN ALL WEEK</h3>
                    <h3 class="fs-6 fw-light ">9:00 AM – 6:00 PM</h3>
                </div>
                <div class="col text-center ">
                    <button class="btn btn-white">View Map</button>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contacts" class="p-5 m-5">
    <div class="row py-4 gap-3 d-flex flex-nowrap pr-5">
        <div class="col-3 overflow-hidden social-1 img-zoom2 "> 
        </div>
        <div class="col-6 my-bg-light-pink d-flex flex-column justify-content-center align-items-center mx-3 ">
           <h3 class="subtitle">MADE FOR SHARING</h3>
           <h1 class="title py-3">Let's stay in touch</h1>
           <button class="btn btn-white px-4 py-2"><i class="fa-brands fa-instagram px-1"></i>Follow Us</button>
        </div>
        <div class="col-3 overflow-hidden social-2 img-zoom2">
        </div>
    </div>
    <div class="row pr-5 gap-4 d-flex flex-nowrap">
        <div class="col-3 overflow-hidden social-3 img-zoom2">
        </div>
        <div class="col-3 overflow-hidden social-4 img-zoom2">
        </div>
        <div class="col-3 overflow-hidden social-5 img-zoom2">
        </div>
        <div class="col-3 overflow-hidden social-6 img-zoom2">
        </div>
    </div>
  </section>
  <section id="shop" class="bg-section7">
    <div class="mx-5 d-flex flex-column justify-content-center h-100 ">
        <h3 class="subtitle text-light px-5">TRY OUR SEASONAL PRODUCTS</h3>
        <h1 class="title text-light py-3 px-5">Order for pick-up or delivery to your home</h1>
        <div class="pt-5 px-5"> <button class="btn btn-white px-4 py-3">Shop Now</button></div>
       
    </div>
  </section>
</template>

<script>
import { store } from "../components/data/store.js";
import CardComponent from "./CardComponent.vue";
import Carousel from "/node_modules/vue-carousel/src/Carousel.vue";
import Slide from "/node_modules/vue-carousel/src/Slide.vue";

export default {
  name: "MainComponent",
  components: {
    CardComponent,
    Carousel,
    Slide,
  },
  data() {
    return {
      store,
      maxScrollLeft: 0,
      currentSlide: 0,
    };
  },
  computed: {
    traslateX() {
      return -this.currentSlide * this.getElementWidth();
    },
  },

  methods: {
    slide(numslide) {
      const totalElement = this.store.pastries.slice(0, 4).length;
      console.log(`total element` + totalElement); //1
      const maxSlide = totalElement;
      console.log(`current slide` + this.currentSlide); //2
      console.log(`max slide` + maxSlide);

      if (this.currentSlide === 0) {
        this.currentSlide = maxSlide;
        console.log(`if` + this.currentSlide); //3
      }
      this.currentSlide = Math.max(
        0,
        Math.min(this.currentSlide + numslide, maxSlide)
      );
      console.log(`current slide dopo` + this.currentSlide); //2
      if (this.currentSlide === maxSlide) {
        this.currentSlide = 0;
        console.log(`if` + this.currentSlide); //3
      }
    },

    getElementWidth() {
      return 420;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.container {
  width: fit-content;
  position: relative;
  transition: 0.5s;
}
.slider-wrapper {
  width: 800px;
  transition: 0.5s;
}
.image-list {
  transition: 0.5s;
}
li {
  list-style: none;
  // position: relative;
}
.slide-button {
  height: fit-content;
  z-index: 1000;
  opacity: 0.5;
  border: 0 !important;
}
.slide-button:hover {
  opacity: 1;
  background-color: $colorPurple;
  color: white;
}
.btn-left {
  left: 20px;
}

.btn-right {
  right: 10px;
}
.corporate-div {
  width: 100%;
  height: 120vh;
  background-image: url(/image/corporate-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.corporate-div-hover {
  position: absolute;
  background-image: url(/image/corporate-hover-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  opacity: 0;
  transition: 0.5s;
}
.corporate-div-hover:hover {
  opacity: 1;
}
.weddings-div {
  width: 100%;
  height: 120vh;
  background-image: url(/image/wedding-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.weddings-div-hover {
  position: absolute;
  background-image: url(/image/wedding-hover-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  opacity: 0;
  transition: 0.5s;
}
.weddings-div-hover:hover {
  opacity: 1;
}
.slider-container {
  max-width: 800px;
  margin: auto;
}

.slider-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  box-sizing: border-box;
}

.slider-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.slider-description {
  font-size: 1rem;
  text-align: center;
}

.bg-row-01 {
  background-image: url(/image/bakery-process-1.jpg);
  background-position: 0% 60%;
  background-size: 180%;
  height: 100vh;
}
.bg-row-02 {
  background-image: url(/image/bakery-process-2.jpg);
  background-position: 100% 60%;
  background-size: cover;
  height: 100vh;
  filter: saturate(0.6);
  filter: brightness(0.5);
}
.bg-row-03 {
  background-image: url(/image/bakery-process-3.jpg);
  background-position: 0% 60%;
  background-size: 180%;
  height: 100vh;
}
.my-fs {
  font-size: 4em;
}
.my-fs-2 {
  font-size: 3em;
}
.bg-purple {
  background-color: #56328b57;
  color: white;
  width: 93%;
  top: 6%;
  bottom: 6%;
  left: 4.3%;
  right: 2%;
}


.z-1 {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.img-newyork {
  background-image: url(image/new-york-bk-600x397.jpg); 
}

.img-london {
  background-image: url(image/london-bk-600x397.jpg);
}


.img-zoom {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 430px;
  transition: background-size 2s ease;
}

.img-zoom:hover {
  background-size: 120%;
}

.img-zoom2 {
  background-position: 10%;
  background-repeat: no-repeat;
  background-size: 140%;
  transition: background-size 1s ease;
}
.img-zoom2:hover {
  background-size: 150%;
}
.col-3{
    height: 400px;
}
.social-1{
        background-image: url(image/social-1.jpg);
    }

    .social-2{
        background-image: url(image/social-2.jpg);
    }
    .social-3{
        background-image: url(image/social-3.jpg);
    }
    .social-4{
        background-image: url(image/social-4.jpg);
    }
    .social-5{
        background-image: url(image/social-5.jpg);
    }
    .social-6{
        background-image: url(image/social-6.jpg);
    }

    .bg-section7{
        background-image: url(image/call-to-action-bg.jpg);
        background-size:cover;
        background-position: center;
        height: 70vh;
    }
    .pr-5{
        padding-right: 60px;
    }
</style>
