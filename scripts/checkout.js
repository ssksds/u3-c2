document.getElementById("confirm").addEventListener("click",random)


function random(){
    let name = document.getElementById("name").value;

    let no=document.getElementById("number").value;

    let address= document.getElementById("address").value;

    setTimeout(function(){
        alert("Your order is accepted");
    },0);

    setTimeout(function(){
        alert("Your order is being Prepared");
    },3000);

    setTimeout(function(){
        alert("Your order is being packed");
    },8000);

    setTimeout(function(){
        alert("Your order is out for delivery");
    },10000);

    setTimeout(function(){
        alert("Order delivered");
    },12000);
   
}