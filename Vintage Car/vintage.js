document.addEventListener("DOMContentLoaded", function() {
console.log("Vintage Hub Cars Website Loaded!");

let cartCount = 0;
const cartIcon = document.querySelector(".cart-icon");

cartIcon.addEventListener("click", function() {
cartCount++;
cartIcon.textContent = `🛒 ${cartCount}`;
});

   
 let wishlistCount = 0;
 const wishlistBtn = document.querySelector(".wishlist-btn");
 const wishlistCountDisplay = document.getElementById("wishlist-count");

 wishlistBtn.addEventListener("click", function() {
 wishlistCount++;
 wishlistCountDisplay.textContent = wishlistCount;
    });

   
 const searchIcon = document.querySelector(".search-icon");
 const searchBox = document.querySelector(".search-box");

 searchBox.style.display = "none";

 searchIcon.addEventListener("click", function() {
 if (searchBox.style.display === "none") {
    searchBox.style.display = "block";
    searchIcon.style.display = "0.5";
 } else {
    searchBox.style.display = "none";
    searchIcon.style.display = "1";
  }
searchBox.addEventListener("keypress", function(event) {
 if (event.key === "Enter") {
 event.preventDefault();
 alert(`Searched for: ${searchBox.value}`);
 searchBox.style.display = "none";
 searchIcon.style.opacity = "1";
 searchBox.value = "";
  }
});
});

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
  link.addEventListener("mouseover", function() {
  link.style.color = "darkred";
  });

  link.addEventListener("mouseout", function() {
  link.style.color = "";
  });
  });

   
 const contactItems = document.querySelectorAll(".contact-item .contact-info");

 contactItems.forEach(item => item.style.display = "none");

 document.querySelectorAll(".contact-item").forEach(item => {
 item.addEventListener("click", function() {
const info = this.querySelector(".contact-info");
info.style.display = (info.style.display === "none" || info.style.display === "") ? "inline" : "none";
  });
  });
   
 const subCategoriesLinks = document.querySelectorAll(".sub-categories a");

 subCategoriesLinks.forEach(function(link) {
 link.addEventListener("click", function(event) {
 event.preventDefault();
 alert(`clicked on: ${link.textContent}`);
 });
 });

   
 function validateForm(event) {
 event.preventDefault();

 const username = document.getElementById('username').value;
 const email = document.getElementById('email').value;
 const phone = document.getElementById('phone').value;
 const password = document.getElementById('password').value;

 if (!username || !email || !phone || !password) {
 alert("All fields are required!");
 return false;
 }

 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 if (!emailRegex.test(email)) {
 alert("Please enter a valid email address.");
 return false;
}

 if (phone.length < 10) {
 alert("Please enter a valid phone number.");
 return false;
 }

 alert("Form submitted successfully!");
 document.getElementById('loginForm').submit();
}

document.getElementById('loginForm').addEventListener('submit', validateForm);
});
document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});
