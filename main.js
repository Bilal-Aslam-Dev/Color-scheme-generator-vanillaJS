var colorInput = document.getElementById("color-input")
var colors = document.querySelectorAll(".color-shade")
var schemeType = document.getElementById("scheme-type")
var colorSchemeCode = document.querySelectorAll('.color-scheme-code')

document.querySelector(".color-scheme-btn").addEventListener("click", () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${schemeType.options[schemeType.selectedIndex].value}`)
    .then((response) => response.json())
    .then((data) => {
        data.colors.map((elem, index) => {
            colors[index].style.backgroundColor = data.colors[index].hex.value
            colorSchemeCode[index].textContent = data.colors[index].hex.value 
        })
    })
})

function ani(el) {
    document.getElementById('img').className = 'classname';
  }