


console.log("workin")


let perview_body=document.getElementById("perview-body")
let perview_image=document.getElementById("perview-image")
let perview_details=document.getElementById("perview-details")
let perview_element_details=document.getElementById("perview-element-details")
let perview_price_details=document.getElementById("perview-price-details")
let perview_buttons=document.getElementById("perview-buttons")


let data=JSON.parse(localStorage.getItem("perviewData"))
console.log(data)
display(data)


function display(data){
    perview_body.innerText=null;

    data.forEach(function(element,index){
        let image=document.createElement("img");
        image.setAttribute("src",element.image)
        image.setAttribute("id","image")

        let text=document.createElement("p");
        text.innertext="Hover to zoom"

        let title=document.createElement("p");
        title.innerText=element.title
        let rating=document.createElement("p");
        rating.innerHTML=`
        <div class="star"><span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>(4.3)<span><a id="qna_numAnswered" href="javascript: void(0)">	
        2351 Ratings
    </a></span>
    </span><span><a id="qna_numAnswered"  href="javascript: void(0)">
        145 Reviews
    </a></span>
    </span><span><a id="qna_numAnswered"  href="javascript: void(0)">	
        Have a question?
    </a></span><hr></div>`

       

        let rs=document.createElement("div")
        let dis=document.createElement("p");
        dis.innerHTML=`<p>MRP<span class="off">RS 1,459</span><span>(Inclusive of all Taxes)</span></p><p class="price>RS ${element.price}</p><span></span>`
        let price=document.createElement("p");
        price.innerHTML=`<p class="price"><span>RS ${element.price}</span></P><span class="peroff">90% off</span>`

        let offer=document.createElement("div")
        //offer.setAttribute("class","offer")
        offer.innerHTML=`<div id="center"><P>(2) Offers | Applicable on cart</p></div><div class="offer"><P> Offers | Applicable on cart
        15% Instant Discount Using AU Small Finance Bank Debit & Credit Cards</P><a href="javascript: void(0)">T&C</a><hr>
        <P>Apply for a Snapdeal BOB Credit Card & get 5% Unlimited Cashback T&C</P><a href="javascript: void(0)">T&C</a></div>`

        let but=document.createElement("div");
        but.innerHTML=`<div class="addBtn"><button id="add">Add To Cart</button><button id="buy">Buy Now</button></div>`

        let delivery=document.createElement("div")
        delivery.setAttribute("class","delivery")
        delivery.innerHTML=`Deliver<span><input class="pincode" placeholder="Enter pin"></span><button id="check" class="pincode">check</button><span>Generally delivered in 7 - 11 days</span>`

        let easyReturn=document.createElement("div")
        easyReturn.setAttribute("id","return")
        easyReturn.innerHTML=`<div><p>7 Days Easy Returns</p>
        <p>Trustpay: 100% Payment Protection. Return or Replacement is applicable for 7 days after</p>
        <p>delivery<a href="javascript: void(0)">Know More</a></p></div>`

 
											

        perview_buttons.append(but,delivery)
        rs.append(dis, price)
        perview_price_details.append(rs,offer)
        perview_element_details.append(title,rating)
       // perview_details.append(perview_element_details, perview_price_details,)
        perview_details.append(perview_element_details, perview_price_details,perview_buttons,easyReturn)
        perview_image.append(image,text)
        perview_body.append(perview_image,perview_details)


let addBtn=document.getElementById("add") 
addBtn.addEventListener("click",()=>{
    console.log(element)
    
localStorage.setItem("cartData",JSON.stringify(element))
})    
        
let buyBtn=document.getElementById("buy")
buyBtn.addEventListener("click",()=>{
    window.location.href="checkout.html"
   console.log("redirect to buy page")
})
    })

}
