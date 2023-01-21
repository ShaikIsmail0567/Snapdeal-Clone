let newdata=[]
let def=[]
async function getdata(){
    try{
        let url=await fetch('https://636f63f1bb9cf402c81694bd.mockapi.io/starproduct')
        let data=await url.json()
    let s=document.querySelector('#s')
    s.innerHTML=`
    <h3>Total Products</h3>
    <h3>${data.length}</h3>
    `



       render(data)
       newdata=data
       def=data
  
    }catch(err){
       console.log(err)
    };
} getdata()
let main=document.querySelector('.product')
function render(data){
console.log(data)
    main.innerHTML=`${
    data.map((item) => {
        let imageURL = `${item.avatar}`;
        let name = `${item.name}`;
        let des = `${item.description}`;
        let id=`${item.id}`;
        let price=`${item.price}`
      
        return getAsCard(imageURL, name,des,id,price );
      })
      .join("")
}

`
}

function getAsCard(imageURL, name, des,id,price) {
 
    return `
    <div>
            <div class="img">   <img src=${imageURL} alt=""></div>
            <p id='name'>${name}</p>
            <p>${des}</p>
            <h3>Product Id:${id}</h3>
            <h3>Rs: ${price}</h3>
            
            <div class="btn">
                   <div class="edit">Edit</div>
                   <div class="dlt">Delete</div>
            </div>
        </div>
  `;
  }
 document.querySelector('.search').addEventListener('change',()=>{

let search=document.querySelector('.search').value;
console.log(search)
let fdata=newdata.filter(function(el){
    return el.name.includes(search)
})
render(fdata)


 })
 document.querySelector('select').addEventListener('change',function(){

    let select=document.querySelector('select').value;
    
if(select=='LOW TO HIGH'){
    newdata.sort((a, b) => a.price - b.price);
render(newdata)
}
 if(select=="HIGH TO LOW"){
    newdata.sort((a, b) => b.price - a.price);
    render(newdata)
}
if(select=="a"){
   
    render(def)
}

 })
function Delete(){

}