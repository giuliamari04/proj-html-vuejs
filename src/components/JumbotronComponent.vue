<template>
    <div class="bg-jumbo">
       <div class="testo-hero">
        <h3 class="subtitle">fresh & tasty bakery day</h3>
        <h1 class="title text-capitalize ">the perfect fresh bread </h1>
        <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.</p>
        <button class="btn btn-white px-4 py-2">Explore our products</button>
       </div>

</div>
</template>

<script>
    export default {
        name:"JumbotronComponet",
    }
</script>

<style lang="scss" scoped>
.bg-jumbo{
    background-image: url(../image/hero-header-bakery.jpg);
    background-size: 140%;
    background-position:50% 100%;
    margin-top: -135px;
    height:120vh ;
}
.title{
    font-size: 3.5em;
}
.testo-hero{
    padding-top: 250px;
    padding-left: 100px;
    width: 500px;
}
</style>