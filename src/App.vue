<template>
  <header>
    <div class="text-center py-3 my-bg-light-pink"> Free International Shipping - 10% OFF SITE</div>
    <NavBarComponent/>
    <JumbotronComponent/>
  </header>
  <main>
    <MainComponent/>
  </main>
  <footer>
    <FooterComponent/>
  </footer>
  <div class="cubotto overflow-hidden d-flex"> 
    <div class="d-flex justify-content-center flex-column   align-items-center  align-content-center w-100">
       <i class="fa-solid fa-store fs-3 "></i> 
       <span class="">Prebuilds</span>
    </div >
    <div class="d-flex justify-content-center flex-column   align-items-center position-absolute hover-cubotto  align-content-center w-100">
      <a href="#" class="text-center"> <i class="fa-solid fa-store fs-3 "></i>
       <span class="">Prebuilds</span>
      </a>
      
    </div>
       
  </div>
  <div class="cubotto2 overflow-hidden  d-flex ">
    <div class="d-flex justify-content-center flex-column   align-items-center  align-content-center w-100">
     <h3 class="text-primary fw-bold "> <sup>$</sup>45</h3>
       <span class="">On Sale</span>
    </div >
    <div class="d-flex justify-content-center flex-column   align-items-center position-absolute hover-cubotto  align-content-center w-100">
      <a href="#" class="text-center"> <i class="fa-solid fa-cart-shopping fs-3"></i> <br>
       <span class="">On Sale</span>
      </a>
     
    </div>
   </div>

   <div class="scroll-top">
     <button class="btn btn-arrow px-4 py-3" @click="scrollToTop">
      <i class="fa-solid fa-chevron-up"></i>
  </button>
   </div>
  
 
</template>

<script>
import { store } from "./components/data/store.js";
import CardComponent from "./components/CardComponent.vue";
import NavBarComponent from "./components/NavBarComponent.vue";
import JumbotronComponent from "./components/JumbotronComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavBarComponent,
    CardComponent,
    JumbotronComponent,
    MainComponent,
    FooterComponent,
    
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getDolci() {
      const pastryNames = store.pastries.map(pastry => pastry.name);
      console.log(pastryNames);
      console.log(store.pastries);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Usa "smooth" per una transizione scorrevole
      });
    },
  },
  mounted() {
    // Call the getDolci method when the component is mounted
    this.getDolci();
  },

}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
.cubotto{
  width: 80px;
  height: 80px;
  background-color:$colorWhite !important;
  border-radius: 10px;
  position: fixed;
  right: 10px;
  top: 180px;
  z-index: 2000;
}
.cubotto2{
  width: 80px;
  height: 80px;
  background-color:$colorWhite !important;
  border-radius: 10px;
  position: fixed;
  right: 10px;
  top: 280px;
  z-index: 2000;
}
.hover-cubotto{
  background-color:$colorWhite !important;
  transform: translateX(80px);
  transition: 0.5s;
  width: 160px;
  height: 80px;
}
.cubotto:hover{
  .hover-cubotto{
    transform: translateX(0);
  }
  
}

.cubotto2:hover{
  .hover-cubotto{
    transform: translateX(0);
  }
  
}
.btn-arrow{
  background-color: rgba(128, 128, 128, 0.616);
    color:white;
    transition: 1s;
    &:hover{
        background-color: $colorPurple;
    }
}
.scroll-top{
  position: fixed;
  bottom: 20px;
  right: 100px;
}

</style>