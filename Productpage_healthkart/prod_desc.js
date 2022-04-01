

increase.addEventListener("click", function increament() {
  if (i >= 1) {
    i++;
    totprice = price1 * i;
    console.log(totprice);
  }

  quantity.innerHTML = i;
  console.log(i);
  localStorage.setItem("totprice", totprice);
});

decrease.addEventListener("click", function increament() {
  if (i != 1) {
    i--;
    totprice = totprice - price1;
    console.log(totprice);
  }

  quantity.innerHTML = i;
  console.log(i);
  localStorage.setItem("totprice", totprice);
});

var items = JSON.parse(localStorage.getItem("items"));
console.log(items);

var addTocart = document.getElementById("addTocart");

var cartItems = JSON.parse(localStorage.getItem("product")) || [];

addTocart.addEventListener("click", function addtocart() {

 cartItems.push(items)
  localStorage.setItem("product", JSON.stringify(cartItems));
  window.location.href = "addtocart.html";
});

function displayData(data) {
  var div1 = document.querySelector(".div2prodimgbig");
  var div2 = document.querySelector("#titleofitem");
  var div3 = document.querySelector(".box1")
  var div4 = document.querySelector(".div2ratingstarnum_rev");
  var span1 = document.querySelector(".pric");
  span1.innerText = `₹${data.price}`;
  var span2 = document.querySelector(".ori");
  var p = document.querySelector("#premiumprice")
  p.innerText = `Premium Member Price:  ₹${data.pmpPrice}`
  var span3 = document.querySelector("#ratingspan");
  span3.innerText = data.rating;
  span2.innerText = `₹${data.strPrice}`
  div4.innerText = `(${data.ratingQ} Rating & Reviews)`
  div3.innerText = `${data.discount}% off`;
  let title = document.createElement("h1");
  title.innerText = data.title;
  title.id = "div2right";
  let image = document.createElement("img");
  image.src = data.image;
  image.id = "itemImage";
  div1.append(image);
  div2.append(title);
  console.log(data.image);
}
displayData(items);
