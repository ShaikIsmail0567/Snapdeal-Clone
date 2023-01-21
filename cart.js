

let cartData = JSON.parse(localStorage.getItem("Addtocart")) || [];
let bmain=document.getElementById("bmain")
let display = (data) => {
  document.getElementById("main").innerHTML = "";
  data.map((el, i) => {
    let cards = document.createElement("div");
    cards.setAttribute("id", "cards");
    let all = document.createElement("div");
    all.setAttribute("id", "all");
    let imgS = document.createElement("div");
    imgS.setAttribute("id", "imgS");
    let img = document.createElement("img");
    img.src = el.thumbnail;
    imgS.append(img);
    let sec = document.createElement("div");
    sec.setAttribute("id", "second");
    let title = document.createElement("h3");
    title.setAttribute("id", "title");
    title.innerHTML = el.title;
    sec.append(title);
    let third = document.createElement("div");
    third.setAttribute("id", "third");
    let price = document.createElement("div");
    price.setAttribute("id", "price");
    price.innerHTML = `Rs ` + el.price;
    let qtydiv = document.createElement("div");
    qtydiv.setAttribute("id", "qtydiv");
    let qty = document.createElement("select");
    qty.innerHTML = `<option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9<span> Max Qty</span></option>`;
    qty.addEventListener("change", function () {
      qtychange(el, qty);
    });
    let qtyno = document.createElement("p");
    if(el.quantity){
        qtyno.innerHTML = el.quantity;
    }else{
        el.quantity=1;
    }

    
    qtydiv.append(qty, qtyno);
    let tot = document.createElement("div");
    tot.setAttribute("id", "tot");
    let pricep = document.createElement("p");
    pricep.innerHTML = `Rs` + (el.price * el.quantity).toFixed(2);
    tot.append(pricep);
    let btns = document.createElement("div");
    btns.setAttribute("id", "btns");

    let remove = document.createElement("div");
    remove.setAttribute("id", "remove");
    remove.addEventListener("click", () => {
      deletefun(el, i);
    });
    let p2 = document.createElement("p");

    p2.innerHTML = "Remove";
    remove.append(p2);
    btns.append( remove);
    third.append(price, qtydiv, tot);
    all.append(imgS, sec, third,btns);
    
    cards.append(all);

    document.getElementById("main").append(cards);
  });
};
display(cartData);

function deletefun(el, i) {
  // console.log("clicked");
  cartData.splice(i, 1);
  localStorage.setItem("Addtocart", JSON.stringify(cartData));
  window.location.reload();
}
function qtychange(el, qty) {
  el.quantity = qty.value;
//   console.log("value:", qty.value);
  localStorage.setItem("Addtocart", JSON.stringify(cartData));
  cartData = JSON.parse(localStorage.getItem("Addtocart")) || [];

  let total = cartData.reduce(function (acc, el) {
    return acc + el.price * el.quantity;
  }, 0);

  let Wholetotal = (Number(total) + 55.0).toFixed(2);
  document.getElementById("total").innerHTML = total;
  localStorage.setItem("totalamt", total);


  display(cartData);
  // window.location.reload()
}
let total = cartData.reduce(function (acc, el) {
  return acc + el.price * el.quantity;
}, 0) .toFixed(2);


let Wholetotal = (Number(total) + 55.0).toFixed(2);
document.getElementById("total").innerHTML = total;


document.getElementById("ptc").addEventListener("click", hulu);
function hulu() {
  localStorage.setItem("totalamt", total);
  localStorage.setItem("payment", JSON.stringify(cartData));
  window.location.href="checkout.html"

}

