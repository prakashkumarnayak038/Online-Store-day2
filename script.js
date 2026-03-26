let buttons = document.querySelectorAll(".category-buttons button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

let count = 0;

function addToCart() {
    count++;
    document.getElementById("cart-count").innerText = count;
}