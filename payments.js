

function openName(evt, cardName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cardName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

  var show = document.getElementsByClassName("login-top");
  var pan = document.getElementsByClassName("login-bottom");
  
  for (var i = 0; i < show.length; i++) {
  
    if (i == 0) {
      show[i].addEventListener("click", function () {
  
        console.log(i, show.length);
  
        this.classList.toggle("active");
  
        pan = this.nextElementSibling;
  
        if (pan.style.display === "block") {
          decreseHeightOf()
          pan.style.display = "none";
        }
        else {
          increseHegintOf();
          pan.style.display = "block";
        }
      });
    }
    else if (i == 1) {
      show[i].addEventListener("click", function () {
  
        this.classList.toggle("active");
  
        pan = this.nextElementSibling;
  
        if (pan.style.display === "block") {
          decreseAddressHeight()
          pan.style.display = "none";
        }
        else {
          increseAddressHeight()
          pan.style.display = "block";
        }
      });
    }
    else if (i == 2) {
      show[i].addEventListener("click", function () {
  
        this.classList.toggle("active");
  
        pan = this.nextElementSibling;
  
        if (pan.style.display === "block") {
          decreseProduct()
          pan.style.display = "none";
        }
        else {
          increseProduct()
          pan.style.display = "block";
        }
      });
    }
    else if (i == 3) {
      show[i].addEventListener("click", function () {
  
        this.classList.toggle("active");
  
        pan = this.nextElementSibling;
  
        if (pan.style.display === "block") {
          decresePayment()
          pan.style.display = "none";
        }
        else {
          incresePayment()
          pan.style.display = "block";
        }
      });
    }
  
  }
  
  function increseHegintOf() {
    document.getElementById("increseHight").style.height = "300px";
  }
  function decreseHeightOf() {
    document.getElementById("increseHight").style.height = "50px";
  }
  function increseAddressHeight() {
    document.getElementById("increseAddressHeight").style.height = "560px";
  }
  function decreseAddressHeight() {
    document.getElementById("increseAddressHeight").style.height = "50px";
  }
  function increseProduct() {
    document.getElementById("increseProduct").style.height = "500px";
  }
  function decreseProduct() {
    document.getElementById("increseProduct").style.height = "50px";
  }
  function incresePayment() {
    document.getElementById("incresePayment").style.height = "700px";
  }
  function decresePayment() {
    document.getElementById("incresePayment").style.height = "50px";
  }
  let obj = JSON.parse(localStorage.getItem("userdata"));

let name = document.querySelector("#name")
name.innerText = "Full Name:-"+ obj.first_name + " " + obj.last_name;
let address = document.querySelector("#address")
address.innerText = "Address:-"+obj.street;
let state = document.querySelector("#district")
state.innerText ="District:-"+ obj.state;
let number = document.querySelector("#number")
number.innerText ="Phone No:-"+ obj.number;