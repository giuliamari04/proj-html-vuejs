<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="{ 'fixed-top': isFixed, 'my-bg-light': !isTransparent }"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/image/avada-bakery-logo.png" alt="logo" class="logo" />
      </a>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarNav"
      >
        <ul class="navbar-nav ml-auto">
          <li v-for="(words, index) in store.navbarWords" :key="index">
            <a
              class="nav-link text-uppercase px-4"
              href="#"
              @click="activeToggle(index)"
              :class="{ active: index === activeIndex }"
            >
              {{ words }}
            </a>
            <div v-if="index === activeIndex" class="bot-border-active"></div>
            <div v-if="index !== activeIndex" class="bot-boreder-text"></div>
          </li>
        </ul>
        <ul class="d-flex list-unstyled">
          <li class="position-relative">
            <a href="#" class="" @click="openMenu()">Account</a>

            <!-- menu dropdown di account -->
            <div class="bot-boreder-text "></div>
            <div class="position-absolute menu-account" v-if="open">
              <input type="text" class="form-control py-2 my-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              <input type="password" class="form-control py-2 my-2" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
              <div class="d-flex py-2 my-2"> <input type="checkbox" class="px-3" > <span class="px-2">Remember Me</span></div>
             <div class="d-flex flex-column w-100 align-items-end py-2 my-2">
               <button class="btn btn-purple w-50">Log In</button>
              <button class="btn btn-white w-50">Register</button>
             </div>
             
            </div>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            <div class="bot-boreder-text"></div>
          </li>
        </ul>
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
      open:false,
    };
  },
  methods: {
    activeToggle(index) {
      this.activeIndex = index;
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      this.isFixed = scrollPosition > 100; 
      this.isTransparent = scrollPosition < 100;

      this.prevScrollPosition = scrollPosition;
    },
    openMenu(){
      this.open = !this.open;
    }
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
  background-color: $colorWhite !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Stile per la navbar quando non è trasparente */
.my-bg-light {
  background-color: $colorWhite !important;
}
ul {
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
.menu-account{
  background-color: white;
  right: 40px;
  top:30px;
  z-index: 3000;
  padding: 20px;
  width: 300px;
  transition: 0.5s;
}

</style>
