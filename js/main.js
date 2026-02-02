console.log("JS file connected")

const flavors = document.querySelectorAll("#fruits img")
console.log(flavors)

function logId() {
    console.log("User Clicked",this.id);
}

flavors.forEach(img => img.addEventListener ("click", logId))

flavors.forEach(function(button){
    button.addEventListener("click",this.id);
})