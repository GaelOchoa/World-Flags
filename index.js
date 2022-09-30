var pregunta = prompt("From which country do you come from")
pregunta = pregunta.toLocaleLowerCase();
var titulo = document.querySelector("title")

var titulo = document.querySelector("title")
if (pregunta == "unity states of america") {
    var USA = document.getElementById("usa")
    USA.style.display = ""
    titulo = document.title = "U.S.A"
}
else if (pregunta == "mexico") {
    var Mexico = document.getElementById("mexico")
    Mexico.style.display = ""
    titulo = document.title = "Mexico"
}
else if (pregunta == "chile") {
    var Chile = document.getElementById("chile")
    Chile.style.display = ""
    titulo = document.title = "Chile"
}
else if (pregunta == "argentina") {
    var argentina = document.getElementById("argentina")
    argentina.style.display = ""
    titulo = document.title = "Argentina"
}
else if (pregunta == "germany") {
    var alemania = document.getElementById("alemania")
    alemania.style.display = ""
    titulo = document.title = "Deutschland"
}
else if (pregunta == "alaska") {
    var alaska = document.getElementById("alaska")
    alaska.style.display = ""
    var cuerpo = document.querySelector("body")
    cuerpo.style.background = "darkblue"
    titulo = document.title = "Alaska"
}
else if (pregunta == "canada") {
    var canada = document.getElementById("canada")
    canada.style.display = ""
    titulo = document.title = "Canada"
}
else if (pregunta == "china") {
    var china = document.getElementById("china")
    china.style.display = ""
    cuerpo2 = document.querySelector("body")
    cuerpo2.style.background = "red"
    titulo = document.title = "中國"
}
else if (pregunta == "france") {
    var francia = document.getElementById("francia")
    francia.style.display = ""
    titulo = document.title = "France"
}
else if (pregunta == "italy") {
    var italia = document.getElementById("italia")
    italia.style.display = ""
   titulo = document.title = "Italia"
}
else if (pregunta == "japan") {
    var japon = document.getElementById("japon")
    japon.style.display = ""
    titulo = document.title = "日本"
}
else if (pregunta == "russia") {
    var rusia = document.getElementById("rusia")
    rusia.style.display = ""
    titulo = document.title = "Россия"
}
else if (pregunta == "thailand") {
    var tailandia = document.getElementById("tailandia")
    tailandia.style.display = ""
    titulo = document.title = "ประเทศไทย"
}
else if (pregunta == "ecuador") {
    var ecuador = document.getElementById("ecuador")
    ecuador.style.display = ""
    titulo = document.title = "Ecuador"
}
else if (pregunta == "half of the world") {
    var ecuador = document.getElementById("ecuador")
    ecuador.style.display = ""
    titulo = document.title = "Ecuador"
}