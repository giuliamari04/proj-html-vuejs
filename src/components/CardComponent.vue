<template>
    <div class="card-container">
        <img :src="'/image/' + img + '400x510.jpg'" alt="immagine" class="image-item " />
              <div class="square-purple d-flex flex-column   justify-content-center align-items-center  align-content-center">
                <h3 class="title">{{ name }}</h3>
                <h5 class="fs-6 fw-light ">{{ category }}, {{ type }}</h5>
                <h5>${{ firstPrice }}.00 - ${{ secondPrice }}.00</h5>
                
              </div>
    </div>
</template>

<script>
    export default {
        name:'CardComponent',
        props:{
            img:String,
            name:String,
            category:String,
            type:String,
            firstPrice:Number,
            secondPrice:Number,
        }
    }
</script>

<style lang="scss" scoped>
  @use "../assets/styles/partials/variables" as *;
  .card-container {
  position: relative;
  cursor: pointer;
}
 h3{
    color: white !important;
 }
  .square-purple{
    opacity: 0;  
    position: absolute ;
    background-color: #56328b57;
    transition: 0.5s;;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; 
    z-index: 1;
    color: white;
    }

 .square-purple:hover{
    opacity: 1;
  }

</style>