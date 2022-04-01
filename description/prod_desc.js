var price1=3000;


//------------------------------------------------------ quantity updation part -----------------------------------------------------
let product = JSON.parse(localStorage.getItem("product"));

let quantity = document.getElementById('quantity');

let increase = document.getElementById('increase');
console.log(quantity)

let i=1;
let totprice=0;



increase.addEventListener('click', function increament () {

    if(i>=1)
    {
    i++;
    totprice=price1*i;
    console.log(totprice);
    }
    
    quantity.innerHTML = i;
    console.log(i)
    localStorage.setItem('totprice',totprice);
});


decrease.addEventListener('click', function increament () 
{

    if(i!=1)
    {
    i--;
    totprice=totprice-price1;
    console.log(totprice);

    }
   
    quantity.innerHTML = i;
    console.log(i)
    localStorage.setItem('totprice',totprice);
});



let product1=[
    {
    img:"https://img6.hkrtcdn.com/12133/prd_1213295-MuscleBlaze-Whey-Protein-4-lb-Rich-Milk-Chocolate_o.jpg",
    totprice:"4199",
    title:"MuscleBlaze Whey Protein, 4 lb, Rich Milk Chocolate"
    }
]



let addTocart = document.getElementById('addTocart');

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

addTocart.addEventListener('click', function addtocart (){
// if(!Cartpage.includes(product1))

    localStorage.setItem("product",JSON.stringify(product1));


alert('added to cart')
})




