function buttonClick() {
    console.log("Button Clicked");
    alert("Button Clicked");
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", buttonClick);
    } else {
        console.error("Button element not found");
    }
});