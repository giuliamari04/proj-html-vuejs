<template>
 <section id="our-products" class="p-5 m-5">
    <div class="row">
          <div class="col-4 py-5">
        <h3 class="subtitle">our products</h3>
        <h1 class="title py-3">All our delectable pastries are backed fresh in our Kitchen every morning, and are made with all-natural, all organic ingredients.</h1>
        <button class="btn btn-purple px-4 py-2">Buy Avada Today!</button>
    </div>
    <div class="col">
        <div class="container">
      <div class="slider-wrapper d-flex align-items-center overflow-hidden ">
        <button id="prev-slide" class="slide-button btn-purple p-3 material-symbols-rounded position-absolute btn-left " @click="slide(-2)">
            <i class="fa-solid fa-chevron-right fa-rotate-180"></i>
        </button>
        <ul class="image-list d-flex p-0 m-0"  :style="{ transform: `translateX(${traslateX}px)` }">
          <li v-for="(pastries, index) in store.pastries.slice(0,4)" :key="index" class="px-2">
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
        <button id="next-slide" class="slide-button btn-purple p-3 material-symbols-rounded position-absolute btn-right " @click="slide(-2)">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
    </div>
    </div>
  
    
  </section>
<section id="special-moments" class="p-5 m-5 ">
    <div class="d-flex flex-column text-center   justify-content-center m-3">
           <h3 class="subtitle">corporate & weddings</h3>
    <h1 class="title">Baking Special Moments</h1>
    </div>
 
    <div class="row mt-5">
        <!-- prima immagine -->
        <div class="col ">
            <div class="position-relative">
            <div class="corporate-div">
            </div>
            <div class="corporate-div-hover d-flex flex-column   justify-content-center align-items-center  align-content-center text-light ">
                <h5 class="fs-6 fw-lighter">International Bakery</h5>
                <h1 class="title text-light ">Corporate Events</h1>
                <button class="btn btn-purple">Explore more</button>
            </div>
        </div>
    </div>
        <div class="col">
            <div class="position-relative">
            <div class="weddings-div">
            </div>
            <div class="weddings-div-hover d-flex flex-column   justify-content-center align-items-center  align-content-center text-light ">
                <h5 class="fs-6 fw-lighter">Private Dining Hall</h5>
                <h1 class="title text-light ">Weddings & Parties</h1>
                <button class="btn btn-purple">Explore more</button>
            </div>
        </div>
        </div>
    </div>
</section>
<section id="find-products">3</section>
<section id="info">4</section>
<section id="locations">5</section>
<section id="contacts">6</section>
<section id="shop">7</section>
</template>

<script>
  import { store } from "../components/data/store.js";
  import CardComponent from "./CardComponent.vue";
    export default {
        name:"MainComponent", 
        components:{
                CardComponent,
            },
        data(){
           
            return{
                 store,
            maxScrollLeft:0,
            currentSlide:0,
            }
           
        },
    computed:{
        traslateX(){
            return -this.currentSlide * this.getElementWidth();
        }
    },
        
  methods: {
   slide(numslide){
    const totalElement = this.store.pastries.slice(0,4).length;
    console.log(`total element`+totalElement)//1
    const maxSlide = totalElement;
    console.log(`current slide`+this.currentSlide)//2
    console.log(`max slide`+ maxSlide)

    if(this.currentSlide === 0){
        this.currentSlide = maxSlide;
        console.log(`if`+this.currentSlide)//3
    }
    this.currentSlide = Math.max(0,Math.min(this.currentSlide + numslide, maxSlide));
    console.log(`current slide dopo`+this.currentSlide)//2
    if(this.currentSlide === maxSlide){
        this.currentSlide = 0;
        console.log(`if`+this.currentSlide)//3
    }
   
   },

   getElementWidth() {
      return 420;
    },
  },
 
    }
</script>

<style lang="scss" scoped>
  @use "../assets/styles/partials/variables" as *;
.container{
    width:fit-content;
    position: relative;
    transition: 0.5s;
}
.slider-wrapper{
    width:800px;
    transition: 0.5s;

}
.image-list{
    transition: 0.5s
}
li{
    list-style: none;
   // position: relative;
}
.slide-button{
    height: fit-content;
    z-index: 1000;
    opacity: 0.5;
    border: 0 !important;
}
.slide-button:hover{
    opacity: 1;
    background-color: $colorPurple;
    color: white;
}
.btn-left{
    left: 20px;
}

.btn-right{
    right: 10px;
}
.corporate-div{
    width: 100%;
    height:120vh;
    background-image: url(../../public/image/corporate-bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.corporate-div-hover{
    position: absolute;
   background-image: url(../../public/image/corporate-hover-bg.jpg);
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
.corporate-div-hover:hover{
    opacity: 1;
}
.weddings-div{
    width: 100%;
    height:120vh;
    background-image: url(../../public/image/wedding-bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.weddings-div-hover{
    position: absolute;
   background-image: url(../../public/image/wedding-hover-bg.jpg);
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
.weddings-div-hover:hover{
    opacity: 1;
}
</style>