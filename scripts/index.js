// Add the coffee to local storage with key "coffee"

// description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir."
// id: 1
// image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
// ingredients: ['Coffee']
// price: 540
// title: "Black"

let arr = JSON.parse(localStorage.getItem("coffee")) || [];

 let count = document.getElementById("coffee_count").innerHTML=arr.length;

 let b=document.getElementById("go_to_bucket").addEventListener("click",red)
function red(){

    window.location.href="bucket.html"
}  

async function getData() {
  let url = "https://masai-mock-api.herokuapp.com/coffee/menu";
  try {
    let res = await fetch(url);
    let data = await res.json();

    append(data.menu.data);
  } catch (err) {
    console.log("err");
  }
}

function append(data) {
  let products = document.getElementById("menu");
  data.forEach(function (data) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = data.image;

    let name = document.createElement("p");
    name.innerHTML = data.title;

    let price = document.createElement("p");
    price.innerHTML = data.price;

    let button = document.createElement("button");
    button.innerText = "add to Bucket";
    button.setAttribute("id", "add_to_bucket");
    button.addEventListener("click", function () {
      addtoCart(data);
    });

    div.append(img, name, price, button);

    products.append(div);
  });
}
function addtoCart(el) {
  arr.push(el);

  localStorage.setItem("coffee", JSON.stringify(arr));
  window.location.reload();

}

getData();
