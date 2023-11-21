import {reactive} from "vue";

export const store = reactive({
    pastries:[
        {
        name:"Choco Chip Cookies",
        catcategory:"pastries",
        type:"cookies",
        firstPrice:18.00,
        secondPrice:32.00,
        discount:false,
       },
       {
        name:"Strawberry Jam Cookies",
        catcategory:"pastries",
        type:"cookies",
        firstPrice:36.00,
        secondPrice:60.00,
        discount:false,
       },
       {
        name:"Cookies with ice cream",
        catcategory:"pastries",
        type:"cookies",
        firstPrice:18.00,
        secondPrice:34.00,
        discount:false,
       },
       {
        name:"Homemade Bread",
        catcategory:"pastries",
        type:"breads",
        firstPrice:26.00,
        secondPrice:68.00,
        discount:false,
       },
       {
        name:"Blackberry Stuffed Bread",
        catcategory:"pastries",
        type:"breads",
        firstPrice:22.00,
        secondPrice:46.00,
        discount:false,
       },
       {
        name:"Cake with Cherry Topping",
        catcategory:"pastries",
        type:"cakes",
        firstPrice:99.00,
        secondPrice:"",
        discount:false,
       },
       {
        name:"Chocolate Cupcake",
        catcategory:"pastries",
        type:"cakes",
        firstPrice:26.00,
        secondPrice:68.00,
        discount:false,
       },
       {
        name:"Cupcake Surprise",
        catcategory:"pastries",
        type:"cakes",
        firstPrice:26.00,
        secondPrice:68.00,
        discount:false,
       },
       {
        name:"Glazed Bread with Fruits",
        catcategory:"pastries",
        type:"breads",
        firstPrice:36.00,
        secondPrice:24.00,
        discount:true,
       },
       {
        name:"perfect macarons",
        catcategory:"pastries",
        type:"cookies",
        firstPrice:32.00,
        secondPrice:56.00,
        discount:false,
       },
       {
        name:"Premium bread",
        catcategory:"pastries",
        type:"breads",
        firstPrice:32.00,
        secondPrice:68.00,
        discount:false,
       },
       {
        name:"Strawberry Donut",
        catcategory:"pastries",
        type:"cakes",
        firstPrice:24.00,
        secondPrice:48.00,
        discount:false,
       },
       
     
    ],
    navbarWords:[
        'home','shop','about','gallery','locations','journal','contact'
    ],
});