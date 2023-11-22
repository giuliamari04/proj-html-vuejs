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
  },
  mounted() {
    // Call the getDolci method when the component is mounted
    this.getDolci();
  },

}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;

</style>