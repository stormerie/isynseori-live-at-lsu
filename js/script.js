document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded Successfully!");
    
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });
});