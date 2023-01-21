let newdata=[]
async function getdata(){
    try{
        let url=await fetch('https://636c62baad62451f9fc8e23b.mockapi.io/products')
       let data=await url.json()
       render(data)
       newdata=data
       console.log(data)
    }catch(err){
        alert(err)
    };
} getdata()
let main=document.querySelector('.product')
function render(data){

    main.innerHTML=`${
    data.map((item) => {
        let imageURL = `${item.img}`;
        let name = `${item.proname}`;
        let id=`${item.id}`;
        let price=`${item.price}`
        return getAsCard(imageURL, name,id,price );
      })
      .join("")}
}

`
}

function getAsCard(imageURL, name, id,price) {
 
    return `
    <div>
            <div class="img">   <img src=${imageURL} alt=""></div>
            <p>${name}</p>
            <h3>Product Id:${id}</h3>
            <h3>${price}</h3>
            
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
    return el.proname.includes(search)
})
render(fdata)


 })
function sortdata(){
    console.log('work')
    let select=document.querySelector('select').value;
    console.dir(select)
if(select=='LOW TO HIGH'){
    newdata.sort((a, b) => a.price - b.price);
render(newdata)
}
 if(select=="HIGH TO LOW"){
    newdata.sort((a, b) => b.price - a.price);
    render(newdata)
}
}
sortdata()