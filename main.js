function buttonClick() {
    console.log("Button Clicked");
    alert("Button Clicked");
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("button");
    var link = document.getElementById("myLink");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Link clicked, but navigation prevented");
        alert("NO DISTRACTIONS! IM CODING!!");
    });

    if (button) {
        button.addEventListener("click", buttonClick);
    } else {
        console.error("Button element not found");
    }
});

