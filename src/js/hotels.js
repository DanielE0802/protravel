setInterval(function () {

    var btnHotel = document.querySelector("#scrollable-force-tab-2")
    if (btnHotel !== null) {
        btnHotel.addEventListener("click", function () {

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
                var des = document.getElementsByClassName("descriptionHotel")

                for (let i = 0; i < title.length; i++) {
                    title.[i].textContent = data.[i+6].nombre
                    des.[i].textContent = data.[i+6].descripcion

                }
                console.log(title)
            })
        })

    }
}, 2000)