
    export var dataUser = "";
    export var nameUserLogin = "";
    export var emailUserLogin = "";
    export var surnameUserLogin = "";
    export var nickUserLogin = "";
    export var imageUserLogin = "";
    export var UserLogin = "";

setInterval(() => {
    dataUser = document.getElementById("dataUser")
    if(dataUser !== null){
        nameUserLogin = dataUser.getAttribute("name")
        emailUserLogin = dataUser.getAttribute("email")
        surnameUserLogin = dataUser.getAttribute("surname")
        nickUserLogin = dataUser.getAttribute("nick")
        imageUserLogin = dataUser.getAttribute("image")
        UserLogin = dataUser.getAttribute("login")


    }   
    else{
        
    }
    
}, 2000);

// let btnLoginFunction = document.getElementById("btnNavbar")
// btnLoginFunction.addEventListener("click", function(){
//     let dataLogin = localStorage.getItem("login")
//     let changeOne = document.getElementById("changeOne")
//     let changeTwo = document.getElementById("changeTwo")

//     if(changeOne !== null){
//         changeOne.textContent = "Mi cuenta"
//         changeTwo.textContent = "Cerrar sesión"
//         changeOne.setAttribute("href", "/micuenta")
//     }


//     console.log(changeTwo)
//     console.log(dataLogin)
// })


// let timeDataLogin = setInterval(function (){
//     let dataLogin = localStorage.getItem("login")
//     let changeOne = document.getElementById("changeOne")
//     let changeTwo = document.getElementById("changeTwo")

//     if(changeOne !== null){
//         changeOne.textContent = "Mi cuenta"
//         changeTwo.textContent = "Cerrar sesión"
//         changeOne.setAttribute("href", "/micuenta")
//     }


//     console.log(changeTwo)
//     console.log(dataLogin)
// },5000)