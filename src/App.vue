<template>
  <header>
    header
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

    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>

</style>