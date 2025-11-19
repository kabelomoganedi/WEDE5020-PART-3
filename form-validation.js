// JavaScript Form Validation for Contact and Order Forms

// Function for Contact Form Validation
function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Regular expression for basic email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if name, email, and message are filled
    if (name == "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message == "") {
        alert("Please enter your message.");
        return false;
    } else if (message.length < 10) {
        alert("Your message must be at least 10 characters long.");
        return false;
    }

    return true; // Allow form submission
}

// Function for Order Form Validation
function validateOrderForm() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var size = document.getElementById("size").value;
    var address = document.getElementById("address").value;

    // Check if all fields are filled
    if (fullname == "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (product == "") {
        alert("Please select a product.");
        return false;
    }

    if (quantity == "" || quantity < 1) {
        alert("Please enter a valid quantity.");
        return false;
    }

    if (size == "") {
        alert("Please enter your shoe size.");
        return false;
    }

    if (address == "") {
        alert("Please enter your delivery address.");
        return false;
    }

    return true; // Allow form submission
}