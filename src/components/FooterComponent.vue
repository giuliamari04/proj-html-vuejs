<template>
    <div class="m-5 d-flex py-4">
        <div class="col-6">
            <img src="image/avada-bakery-logo.png" alt="img">
            <ul class="d-flex flex-wrap py-4">
                <li  v-for="(words, index) in store.navbarWords" :key="words.id" class="px-3">{{ words }}</li>
                <li>Orders</li>
            </ul>
            <span class="fw-light">© Copyright 2019 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</span>
        </div>
        <div class="col-6 d-flex  flex-column  justify-content-center align-items-center">
            <h3 class="title py-3">Subscribe to our Newsletter</h3>
            <div class="d-flex w-75">
                 <input type="email" class="form-control" placeholder="Enter email address*" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-purple px-5 py-2 mx-3">Subscribe</button>
            </div>
           
            <div class="mt-auto fs-5 title text-end w-75">
                <i class="fa-brands fa-instagram px-3"></i>
                <i class="fa-brands fa-x-twitter px-3"></i>
                <i class="fa-brands fa-facebook-f px-3"></i>
                <i class="fa-brands fa-pinterest-p px-3"></i>
                <i class="fa-brands fa-youtube px-3"></i>
            </div>
        </div>
    </div>
</template>

<script>
 import { store } from "../components/data/store.js";
    export default {
        name:"FooterComponent",
        data(){
            return{
                 store,
            }
           
        }
           
        
    }
</script>

<style lang="scss" scoped>
li{
    list-style: none;
    text-transform: capitalize;
}
ul{
    width: 90%;
}
</style>