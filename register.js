let arr = JSON.parse(localStorage.getItem("register")) || []


let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let name = document.querySelector('#Name').value;
    console.log(name)
    let loginId = document.querySelector('#mail').value;

    let passwoerd = document.querySelector('#pass').value;


    let obj = {
        name,
        loginId,
        passwoerd,
        btn
    }

    arr.push(obj)
    localStorage.setItem("register", JSON.stringify(arr))
    window.location.href="signin.html"
    alert("Account Created sussefully ! Please Log In")
})