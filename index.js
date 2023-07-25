function calculate() {
var height = (document.getElementById("height").value)
var weight = document.getElementById("weight").value
console.log(height)
console.log(weight)

var imc = weight / height**2

var text=""

if(imc < 18.5) {
text = "Você está magro"

} else if(imc < 24.9){
text = "Você está normal"

} else if (imc < 29.9) {
text = "Você está com sobre peso"

} else if (imc < 39.9) {
text = "Você está com obesidade"

} else if(imc > 39.9) {
   text = "Você está com obesidade mórbida"
}


document.getElementById("text_area").innerText = text








}











