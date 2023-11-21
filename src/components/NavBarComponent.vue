<template>
    <nav class="navbar navbar-expand-lg  " :class="{ 'fixed-top': isFixed, 'my-bg-light': !isTransparent }">
      <div class="container-fluid ">
        <a class="navbar-brand" href="#">
          <img src="/image/avada-bakery-logo.png" alt="logo" class="logo">
        </a>
        <div class="collapse navbar-collapse d-flex  justify-content-between " id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li v-for="(words, index) in store.navbarWords" :key="index" >
              <a
                class="nav-link text-uppercase px-4"
                href="#"
                @click="activeToggle(index)"
                :class="{ 'active': index === activeIndex }"
              >
                {{ words }}
              </a>
              <div v-if="index === activeIndex" class="bot-border-active"></div>
            <div v-if="index !== activeIndex" class="bot-boreder-text"></div>
            </li>
          
          </ul> 
          <div class="">
                  <a href="#">Account</a>  
                  <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { store } from "../components/data/store.js";
  
  export default {
    name: "NavBarComponent",
    data() {
      return {
        store,
        activeIndex: 0,
        isFixed: false,
        isTransparent: true,
        prevScrollPosition: 0,
      };
    },
    methods: {
      activeToggle(index) {
        this.activeIndex = index;
      },
      handleScroll() {
        const scrollPosition = window.scrollY;
        this.isFixed = scrollPosition > 100; // Cambia quando inizia il fissaggio
        this.isTransparent = scrollPosition < 100; // Cambia quando inizia il cambio di colore
  
        this.prevScrollPosition = scrollPosition;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;
  /* Stile per la navbar */
  nav.navbar {
    padding: 20px 0;
    background-color: transparent;
    transition: background-color 0.5s ease-in-out;
  }
  
  /* Stile per il logo */
  .logo {
    max-width: 150px;
  }
  
  /* Stile per la navbar quando fissata */
  .fixed-top {
    background-color: $colorWhite  !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Stile per la navbar quando non è trasparente */
  .my-bg-light {
    background-color:$colorWhite !important;
  }
  ul{
    margin-left: 160px;
  }
  li {
    color: $colorPurple;
    position: relative;
    font-size: small;
  }
  
  .bot-border-active {
    background-color: $colorPurple;
    height: 2px;
    width: 50%;
    margin-left: 20%;
  }
  
  li:hover .bot-boreder-text {
    transform: translateY(0);
    opacity: 1;
  }
  
  .bot-boreder-text {
    background-color: $colorPurple;
    height: 2px;
    width: 50%;
    opacity: 0;
    margin-left: 20%;
    transition: 0.5s ease-in-out;
    transform: translateY(-20px);
    position: absolute;
    bottom: 0;
    left: 5%;
  }
  
  .active {
    color: $colorPurple;
  }
  a {
    text-decoration: none;
    color: $colorPurple;
    padding: 10px;
    text-transform: uppercase;
    font-size: small;
  }
  </style>
  