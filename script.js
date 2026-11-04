const form = document.getElementById("orderForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (username !== "" && email !== "") {
        message.textContent ="Thank you for visiting, " + username + "! We will contact you at " + email + ".";
    }
});

//color change
let rows = document.querySelectorAll("table tr");

rows.forEach(function(row) {
    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "lightblue";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});

// Toggle Light/Dark Mode
let modeButton = document.getElementById("modeButton");

modeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

//add to total
let accessories = document.querySelectorAll(".accessory");
let total = document.getElementById("total");

accessories.forEach(function(item) {
    item.addEventListener("change", function() {
        let sum = 0;
        accessories.forEach(function(item) {
            if (item.checked) {
                sum = sum + Number(item.value);
            }
        });
        total.textContent = "Total: Rs. " + sum;
    });
});

//age discounts
let orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let birthYear = document.getElementById("birth-year").value;

    birthYear = parseInt(birthYear);
    let age = 2026 - birthYear;
    let message = document.getElementById("discount-message");

    if (age <= 25) {
        message.textContent ="You are " + age + " years old. You qualify for a student discount!";
    }
    else if (age >= 60) {
        message.textContent ="You are " + age + " years old. You qualify for a senior discount!";
    }
    else {
        message.textContent =
            "You are " + age + " years old. No age-based discount applies.";
    }
});

//read more toggle
let readMoreBtn = document.getElementById("readMoreBtn");
let extraText = document.getElementById("extraText");

readMoreBtn.addEventListener("click", function() {
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    }
    else {
        extraText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }

});

let products = document.querySelectorAll(".product-item");

let allBtn = document.getElementById("allBtn");
let tvBtn = document.getElementById("tvBtn");
let accessoryBtn = document.getElementById("accessoryBtn");
// All products
allBtn.addEventListener("click", function() {
    products.forEach(function(product) {
        product.style.display = "block";
    });
});

// TVs only
tvBtn.addEventListener("click", function() {
    products.forEach(function(product) {
        if (product.classList.contains("tv")) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }
    });
});

// Accessories only
accessoryBtn.addEventListener("click", function() {
    products.forEach(function(product) {
        if (product.classList.contains("accessory")) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }
    });
});

//open or closed
let currentHour = new Date().getHours();
let  statusElement = document.getElementById("status");
if (currentHour >=8 && currentHour < 20) {
     statusElement.textContent = "We are Open!";
    statusElement.style.color = "green";
}
else {
     statusElement.textContent = "Closed - Open at 8 AM";
     statusElement.style.color = "red";
}

//special note
let specialNotes = document.getElementById("special-notes");
let charCount = document.getElementById("char-count");

specialNotes.addEventListener("input", function() {
    let remaining = 100 - specialNotes.value.length;
    charCount.textContent = remaining + " characters remaining";

});