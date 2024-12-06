document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form input values
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const cardHolder = document.getElementById('cardHolder').value.trim();

    // Initialize an array to collect error messages
    let errors = [];

    // Validate fields and push errors into the array
    if (!cardNumber || !/^\d{16}$/.test(cardNumber.replace(/-/g, ''))) {
        errors.push("Card Number: Please enter a valid 16-digit card number.");
    }

    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        errors.push("Expiry Date: Please use the MM/YY format and ensure the month is valid.");
    }

    if (!cvv || !/^\d{3}$/.test(cvv)) {
        errors.push("CVV: Please enter a valid 3-digit CVV.");
    }

    // Validate Cardholder Name (only alphabets and spaces allowed)
    if (!cardHolder || !/^[a-zA-Z\s]+$/.test(cardHolder)) {
        errors.push("Cardholder Name: Please enter a valid name (only alphabets and spaces allowed).");
    }

    // Check if there are any errors
    if (errors.length > 0) {
        // Join all error messages into a single alert
        alert(`Please correct the following errors:\n\n${errors.join("\n")}`);
        return;
    }

    // // // If all validations pass
    // // // Hide the payment form and show the success message
    // document.getElementById('paymentForm').style.display = 'none';
    // document.getElementById('paymentMessage').style.display = 'block';

     // If validation passes, hide payment methods and show success message
  document.querySelector('.payment-container').style.display = 'none';// Hide the payment methods section
  document.getElementById('paymentMessage').style.display = 'block';// Show the success message
    // Redirect to the homepage after a delay (e.g., 3 seconds)
    setTimeout(function () {
        window.location.href = 'index.html'; // Redirects to the homepage
    }, 3000); // 3000 milliseconds = 3 seconds
});
