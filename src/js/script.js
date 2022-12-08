document.addEventListener("DOMContentLoaded", function(){

    const nav = document.querySelector(".navbar")
    const divCollapse = document.querySelector("#navbarNavAltMarkup")
    const divLink = document.querySelectorAll(".nav-link")


    function addShadow() {
        if (window.scrollY >= 250) {
        nav.classList.add("shadow-bg")
        } else {
            nav.classList.remove("shadow-bg")
        }
    }

    
    divLink.forEach(link => link.addEventListener("click", () => divCollapse.classList.remove("show")))


    window.addEventListener("scroll", addShadow)
})

 



    