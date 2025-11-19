# WEDE5020-PART-3
# Kabelo's Finest Shoes Website

## Description:
A modern, clean, and functional shoe store website built using HTML, CSS, and JavaScript. Kabelo's Finest Shoes offers stylish, high-quality footwear with a smooth user experience, including a gallery, order form, contact form, and more.

## Fixes & Improvements Made:

### 1. STRUCTURE:
- Added semantic sectioning using `<main>` and `<section>` tags for better accessibility.
- Ensured consistent use of IDs for internal navigation (`#home`, `#gallery`, etc).
- Clean and readable indentation for maintainability.

### 2. STYLING:
- Applied a modern color scheme with a dark header/footer and light main content area.
- Added hover transitions to nav links, buttons, and gallery images for interactive feedback.
- Used box shadows and border radius to visually enhance the page.

### 3. GALLERY:
- Created a responsive gallery using Flexbox for a smooth layout.
- Styled product cards with hover effects to make the site feel dynamic.
- Included product titles and prices under each image for easy browsing.

### 4. CONTACT FORM:
- Included labeled fields: Name, Email, and Message for easy communication.
- Used HTML `required` attributes for basic form validation.
- Styled inputs with consistent padding and spacing to improve the user experience.

### 5. ORDER FORM:
- Added fields: Full Name, Email, Phone, Product dropdown, Quantity, Shoe Size, Delivery Address.
- Used appropriate input types (email, number, tel) to streamline form filling.
- Included `<select>` for product choices with listed prices for convenience.
  
### 6. CODE CLEANUP:
- Applied a global CSS reset (box-sizing, margin, padding) to ensure consistent styling across browsers.
- Grouped CSS into logical sections for easier readability and maintainability.
- Removed unused or repetitive code for better performance.

### 7. NAVIGATION:
- Fixed navigation bar with working anchor links to each page section.
- Added hover transition effects to nav links for better interactivity.

## JavaScript Changes:
### 1. Form Validation:
- **Order Form & Contact Form Validation**:
  - Added JavaScript validation to check if required fields (name, email, phone, product, quantity, shoe size, delivery address) are filled out before submission.
  - Prevented form submission if any required fields are missing.
  - Implemented basic client-side validation using `onsubmit` attributes on forms to call the `validateForm()` function.
  - Example of validation function:
  
    ```javascript
    function validateForm() {
        var name = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var product = document.getElementById("product").value;
        var quantity = document.getElementById("quantity").value;
        var size = document.getElementById("size").value;
        var address = document.getElementById("address").value;

        if (!name || !email || !phone || !product || !quantity || !size || !address) {
            alert("Please fill in all fields before submitting.");
            return false; // Prevent form submission
        }
        return true; // Allow form submission
    }
    ```

### 2. Future JavaScript Enhancements:
- Plan to implement more sophisticated JavaScript features, including:
  - **Client-Side Validation Enhancements**: Using regular expressions to validate email format, phone number, and shoe size fields.
  - **Dynamic Product Selection**: Using JavaScript to dynamically display available product options and prices based on the user's choice.
  - **Form Submission via AJAX**: Integrate AJAX for seamless form submission without reloading the page.
  
### 3. Code Integration:
- The JavaScript code for form validation was placed in separate files and linked to HTML pages for better organization.
- All form validation scripts are attached directly in the respective HTML files using `<script>` tags or external JS files.

## Images (Should be stored in the `images/` folder):
- `logo.webp`
- `formal shoe 1.webp`
- `formal shoe 2.webp`
- `formal shoe 3.jfif`

## Ready for Future Enhancements:
- **Mobile Responsiveness**: Implement media queries for better viewing on mobile devices.
- **Backend Integration**: Enable backend processing for form submissions (e.g., using PHP, Node.js, or other server-side frameworks).
- **Enhanced JavaScript Functionality**: Implement more interactive JavaScript features like a shopping cart, product search, and filtering options.

© 2025 Kabelo's Finest Shoes. All rights reserved.
