console.log("JS file connected")

const buy = document.querySelector("#lime-main")

const controlbuttons = document.querySelectorAll("#press")
console.log(controlbuttons)

function buyProduct() {
    console.log("user clicked buy button")
    console.log(this.id);
}

function logMyId() {
    console.log(this.id);
}

buy.addEventListener("click", buyProduct)

controlButtons.forEach(function(button){
    button.addEventListener("click", logMyId);
})