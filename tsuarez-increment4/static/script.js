var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

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

// Arrays + loops (commented out to prevent alerts on every page load)
// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") { alert("Banana found!"); }
//     }
// }
// findTheBanana(L1);
// findTheBanana(L2);

// ── Time-based greeting ──
var now = new Date();
var hour = now.getHours();

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

// ── Dynamic footer year ──
function addYear() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

// ── Active navigation bar ──
function ActiveNav() {
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

// ── jQuery: Read More / Read Less (index.html only) ──
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

// ── Buy Tickets: reveal purchase form ──
function showForm(dateStr) {
    var form = document.getElementById("purchaseForm");
    var selectedDate = document.getElementById("selectedDate");
    if (form) {
        form.style.display = "block";
        if (selectedDate && dateStr) {
            selectedDate.value = dateStr;
        }
        form.scrollIntoView({ behavior: "smooth" });
    }
}
