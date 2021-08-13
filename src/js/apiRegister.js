let user = document.getElementById('nameRegister')

let btn = document.getElementById('confirmRegister')

btn.addEventListener('click', function () {
    alert('ok')
    console.log(user)
})

async function getHoteles() {
    let response = await fetch(
        "http://localhost:3001/api/hotel/hotel", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
        })
    let data = await response.json()
    console.log(data)
    return data
}

let info = getHoteles()
info.then(data => {
    var title = document.getElementsByClassName("titleHotel")
    for (let i = 0; i < title.length; i++) {
        title.textContent = "hola"

    }
    console.log(title)
})



