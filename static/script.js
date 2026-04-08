// just some practice variables and math from early on
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

// this function adds two things together and prints the result
function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

// checking which is longer, the string or the number
if (C.length > z) {
    if (C.length < z) {
        console.log(z);
    }
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var now = new Date();
var hour = now.getHours();

// shows a different greeting depending on what time of day it is
function greeting(h) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        if (h < 5 || h >= 20) {
            greetingElement.innerHTML = "Good night! Welcome to MonoMuse";
        } else if (h < 12) {
            greetingElement.innerHTML = "Good morning! Welcome to MonoMuse";
        } else if (h < 18) {
            greetingElement.innerHTML = "Good afternoon! Welcome to MonoMuse";
        } else {
            greetingElement.innerHTML = "Good evening! Welcome to MonoMuse";
        }
    }
}

greeting(hour);

// puts the current year in the footer copyright text
function addYear() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

// highlights the nav link for whatever page you're currently on
function ActiveNav() {
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

// read more / read less buttons on the home page, uses jQuery to show/hide the extra text
if (typeof jQuery !== "undefined") {
    $("#readMore").click(function () {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });

    $("#readLess").click(function () {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
}

// sends the user to the checkout page with the chosen event date in the URL
function showForm(dateStr) {
    window.location.href = "checkout.html?date=" + encodeURIComponent(dateStr);
}

// reads the event date from the URL and shows it on the checkout page
function initCheckout() {
    var params = new URLSearchParams(window.location.search);
    var date = params.get("date");
    var infoEl = document.getElementById("selectedEventInfo");
    var hiddenDate = document.getElementById("selectedDate");
    if (infoEl && date) {
        infoEl.innerHTML = "<strong>Selected Event:</strong> " + date;
        infoEl.style.display = "block";
    }
    if (hiddenDate && date) {
        hiddenDate.value = date;
    }
    updatePrice();
}

// calculates the total price based on ticket type and quantity
function updatePrice() {
    var typeSelect = document.getElementById("ticketType");
    var qtyInput = document.getElementById("ticketQty");
    var totalEl = document.getElementById("orderTotal");
    if (typeSelect && qtyInput && totalEl) {
        var price = parseFloat(typeSelect.value);
        var qty = parseInt(qtyInput.value) || 0;
        var total = price * qty;
        totalEl.innerHTML = "Total: $" + total.toFixed(2);
    }
}

// validates the form fields and if everything looks good, saves the order to sessionStorage and redirects
function submitOrder() {
    var name = document.getElementById("buyName");
    var email = document.getElementById("buyEmail");
    var qty = document.getElementById("ticketQty");
    var date = document.getElementById("selectedDate");
    var zip = document.getElementById("buyZip");
    var typeSelect = document.getElementById("ticketType");
    var valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("qtyError").innerHTML = "";
    document.getElementById("dateError").innerHTML = "";
    document.getElementById("zipError").innerHTML = "";

    if (!name.value.trim()) {
        document.getElementById("nameError").innerHTML = "Name is required.";
        valid = false;
    }
    if (!email.value.trim()) {
        document.getElementById("emailError").innerHTML = "Email is required.";
        valid = false;
    }
    var qtyVal = parseInt(qty.value);
    if (!qtyVal || qtyVal < 1 || qtyVal > 10) {
        document.getElementById("qtyError").innerHTML = "Quantity must be between 1 and 10.";
        valid = false;
    }
    if (!date.value) {
        document.getElementById("dateError").innerHTML = "No event date found. Please go back to Buy Tickets and select an event.";
        valid = false;
    }
    if (zip.value && !/^\d{5}$/.test(zip.value)) {
        document.getElementById("zipError").innerHTML = "Zip code must be 5 digits.";
        valid = false;
    }

    if (valid) {
        var price = parseFloat(typeSelect.value);
        var total = price * qtyVal;
        var typeLabels = { "18": typeSelect.options[typeSelect.selectedIndex].text.split(" –")[0] };
        sessionStorage.setItem("confName", name.value.trim());
        sessionStorage.setItem("confEmail", email.value.trim());
        sessionStorage.setItem("confDate", date.value);
        sessionStorage.setItem("confType", typeLabels[typeSelect.value] || typeSelect.value);
        sessionStorage.setItem("confQty", qtyVal);
        sessionStorage.setItem("confTotal", "$" + total.toFixed(2));
        window.location.href = "confirmation.html";
    }
}

// reads the order info from sessionStorage and displays it on the confirmation page
function loadConfirmation() {
    var fields = ["confName", "confEmail", "confDate", "confType", "confQty", "confTotal"];
    fields.forEach(function(key) {
        var el = document.getElementById(key);
        if (el) {
            el.innerHTML = sessionStorage.getItem(key) || "—";
        }
    });
}

// toggles the nav links to show/hide on mobile when the hamburger button is clicked
function toggleNav() {
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        link.classList.toggle("responsive");
    });
}

// array of gallery images with alt text and captions for the exhibitions slideshow
var gallerySlides = [
    {
        src: "../static/artifacts.jpg",
        alt: "Glass display case containing ancient village artifacts including ceramics, stone tools, and bone implements arranged on teal felt",
        caption: "Ancient Artifact Display – Ceramics, stone tools, and bone implements recovered from village excavations. &copy; KSL TV"
    },
    {
        src: "../static/statue.jpeg",
        alt: "Museum gallery hallway lined with ancient stone sculptures, with a large bronze Buddha head in the foreground",
        caption: "Ancient Sculpture Gallery – Stone and bronze sculptures spanning centuries of artistic tradition. &copy; Stars and Stripes"
    },
    {
        src: "../static/hut.png",
        alt: "Scale model of a prehistoric circular dwelling with a thatched roof, wooden frame, and clay walls displayed in a museum",
        caption: "Scale Model: Ancient Circular Dwelling – Architectural reconstruction of a prehistoric village structure. &copy; Kansas Sampler Foundation"
    }
];
var currentSlide = 0;

// moves to the next or previous slide and updates the image and caption
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + gallerySlides.length) % gallerySlides.length;
    var img = document.getElementById("galleryImg");
    var caption = document.getElementById("galleryCaption");
    if (img && caption) {
        img.src = gallerySlides[currentSlide].src;
        img.alt = gallerySlides[currentSlide].alt;
        caption.innerHTML = gallerySlides[currentSlide].caption;
    }
}

// sets up the Leaflet map on the explore page, only runs if the map element exists
if (document.getElementById("map")) {
    var map = L.map("map").setView([40.4432, -79.9511], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);

    L.marker([40.4432, -79.9511])
        .addTo(map)
        .bindPopup("<b>MonoMuse Museum</b><br>4400 Forbes Ave, Pittsburgh, PA")
        .openPopup();
}
