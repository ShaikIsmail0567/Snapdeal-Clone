let arr = JSON.parse(localStorage.getItem("register"));
console.log(arr);
let btn = document.querySelector('button')
// let logId = document.querySelector('#mail').value;
// let password = document.querySelector('#pass').value;

btn.addEventListener('click',(res)=>{
// res.preventDefault()
    input1=document.querySelector("#pass").value
        ema=document.querySelector("#mail").value
        console.log(input1,ema)
        let count=0;
    for(let i=0;i<arr.length;i++){
        
        if(input1==arr[i].passwoerd){
                
                count++
            }
        
    }
    if(count>0){
        alert("Login Successfull")
                window.location.href="index.html"
                return;
    }
    else{
        alert("plaese Enter valid Detail")
    }
    
   

})