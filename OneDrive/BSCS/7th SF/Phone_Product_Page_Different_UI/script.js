//Form handling age discount
const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const discount = document.getElementById("discount");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const birthYear = parseInt(document.getElementById("birth-year").value);

    discount.textContent = "";

    if (username === "" || email === "") {
        message.textContent = "Please fill in both name and email.";
        return;
    }

    message.textContent = "Thank you for visiting, " + username + "! We will contact you at " + email + ".";

    // calculate age
    if (!isNaN(birthYear)) {
        const age = 2026 - birthYear;

        if (age >= 60) {
            discount.textContent = "You qualify for our Senior discount!";
        } else if (age >= 18 && age <= 25) {
            discount.textContent = "You qualify for our Student discount!";
        }
    }
});


const rows = document.querySelectorAll("tbody tr");

rows.forEach(function (row) {
    row.addEventListener("mouseover", function () {
        row.style.backgroundColor = "#dca8ff";
        row.style.color = "#222";
    });

    row.addEventListener("mouseout", function () {
        row.style.backgroundColor = "";
        row.style.color = "";
    });
});

//Light/Dark toggle
document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

//Order total
const checkboxes = document.querySelectorAll(".item");
const totalEl = document.getElementById("total");

checkboxes.forEach(function (box) {
    box.addEventListener("change", function () {
        let total = 0;

        checkboxes.forEach(function (b) {
            if (b.checked) {
                total += parseInt(b.dataset.price);
            }
        });

        totalEl.textContent = "Total: Rs. " + total.toLocaleString();
    });
});


const readBtn = document.getElementById("readBtn");
const extra = document.getElementById("extra");

readBtn.addEventListener("click", function () {
    if (extra.style.display === "none") {
        extra.style.display = "block";
        readBtn.textContent = "Read Less";
    } else {
        extra.style.display = "none";
        readBtn.textContent = "Read More";
    }
});

//Category filter
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const choice = btn.dataset.filter;

        rows.forEach(function (row) {
            if (choice === "all" || row.dataset.category === choice) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});

const status = document.getElementById("status");
const hour = new Date().getHours();

if (hour >= 13 && hour < 6) {
    status.textContent = "We are Open!";
    status.style.color = "green";
} else {
    status.textContent = "Closed - Open at 8 AM";
    status.style.color = "red";
}

const notes = document.getElementById("special-notes");
const counter = document.getElementById("counter");

notes.addEventListener("input", function () {
    const left = 100 - notes.value.length;
    counter.textContent = left + " characters remaining";
});