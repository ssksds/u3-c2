// On clicking remove button the item should be removed from DOM as well as localstorage.

let data = JSON.parse(localStorage.getItem("coffee")) || [];


function append() {
 
  

    let con = document.getElementById("bucket");

    data.forEach(function (el, i) {
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.src = el.image;

      let name = document.createElement("p");
      name.innerHTML = el.title;

      let price = document.createElement("p");
      price.innerHTML = el.price;

      let button = document.createElement("button");
      button.innerText = "remove";
      button.setAttribute("id", "remove_coffee");
      button.addEventListener("click", function () {
        remove(el, i);
      });

      div.append(img, name, price, button);
      con.append(div);
    });

    function remove(el, i) {
        data.splice(i, 1);
        localStorage.setItem("coffee", JSON.stringify(data));
        window.location.reload();
      }
  
}
let total=data.reduce(function(sum,el){

    return sum + Number(el.price)
},0);
document.getElementById("total_amount").innerHTML=total;

append();
