// Store cart items in local storage with key: "items"
let url = " https://grocery-masai.herokuapp.com/items";

// let cartDeatils = JSON.parse(localStorage.getItem("cart_items")) || [];

// fetch(url)
// .then(function(res){
//     return res.json();
  
// })
// .then(function(res){
//     getDetails(res)
//     console.log("res ", res)
// })
// .catch(function(err){
//     console.log(err)
// })

// function getDetails(res)
// {  
//     // console.log(res)
//   let box = document.querySelector("#groceries");
//   res.data.map(function(el,i){
//       console.log(el.name,el.price)
//       let div = document.createElement("div");
//       let img= document.createElement("img");
//       img.src = el.image;
//       let price = document.createElement("p");
//       price.innerText=el.price;
//       let name = document.createElement("p");
//       name.innerText = el.name;
//       let btn = document.createElement("button");
//       btn.innerText = "AddToCart";
//       btn.setAttribute("id","add_to_cart")
//       btn.addEventListener("click",function(){
//           myFn(el);
//       });
//       div.append(img,name,price,btn);
//       box.append(div);


//   })
// }
// let count =0;
//  function myFn(el,i)
//  {   document.querySelector("#item_count").innerHTML=null;
//     cartDeatils.push(el);
//     localStorage.setItem("items",JSON.stringify(cartDeatils));
//      count++;
//      let counter = document.createElement("p");
//      counter.innerText= count;
     
//      document.querySelector("#item_count").append(counter)
//  }




// Store cart items in local storage with key: "items"
// let url = "https://grocery-masai.herokuapp.com/items";

let cartDeatils = JSON.parse(localStorage.getItem("cart_items")) || [];

fetch(url)
.then(function(res){
    return res.json();
  
})
.then(function(res){
    getDetails(res)
    console.log("res ", res)
})
.catch(function(err){
    console.log(err)
})

function getDetails(res)
{  console.log(res)
  let box = document.querySelector("#groceries");
  res.data.map(function(el,i){
      console.log(el.name,el.price)
      let div = document.createElement("div");
      let img= document.createElement("img");
      img.src = el.image;
      let price = document.createElement("p");
      price.innerText=el.price;
      let name = document.createElement("p");
      name.innerText = el.name;
      let btn = document.createElement("button");
      btn.innerText = "AddToCart";
      btn.setAttribute("id","add_to_cart")
      btn.addEventListener("click",function(){
          myFn(el);
      });
      div.append(img,name,price,btn);
      box.append(div);


  })
}
let count;
 function myFn(el,i)
 {   document.querySelector("#wallet").innerHTML=700;
    cartDeatils.push(el);
    localStorage.setItem("cart_items",JSON.stringify(cartDeatils));
     count.innerText -= el.price;
     let counter = document.createElement("p");
     counter.innerText= count;
     
     document.querySelector("#item_count").append(counter)
 }




