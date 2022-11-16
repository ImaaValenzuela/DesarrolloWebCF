let close = document.querySelectorAll(".close")

close.forEach(function(link){
    link.addEventListener("click", function(ev){
        ev.preventDefault()
        let content = document.querySelector(".content")
        content.classList.remove("animate__backInDown")
        content.classList.remove("animate__animated")
        content.classList.add("animate__backOutUp")
        content.classList.add("animate__animated")
        setTimeout(function(){
            location.href = "/pages/boletin.html"
        }, 600)
    })
})
