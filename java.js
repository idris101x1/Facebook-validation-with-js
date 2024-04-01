document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate first name
        const firstName = document.querySelector('input[type="text"][placeholder="First Name"]').value;
        if (!firstName) {
            alert('Please enter your first name.');
            return;
        }

        // Validate last name
        const lastName = document.querySelector('input[type="text"][placeholder="Last Name"]').value;
        if (!lastName) {
            alert('Please enter your last name.');
            return;
        }

        // Validate email
        const email = document.querySelector('input[type="email"][placeholder="Email"]').value;
        if (!email) {
            alert('Please enter your email.');
            return;
        }

        // Validate password
        const password = document.querySelector('input[type="password"][placeholder="Password"]').value;
        if (!password) {
            alert('Please enter a password.');
            return;
        }

        // Validate date of birth
        const dob = document.querySelector('input[type="date"]').value;
        if (!dob) {
            alert('Please enter your date of birth.');
            return;
        }

        // Validate gender
        const gender = document.querySelector('input[type="radio"][name="gender"]:checked');
        if (!gender) {
            alert('Please select your gender.');
            return;
        }

        // If all fields are valid, submit the form
        alert('Form submitted successfully!');
        form.submit();
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate email or phone
        const emailOrPhone = document.querySelector('input[type="text"][placeholder="Email or Phone"]').value;
        if (!emailOrPhone) {
            alert('Please enter your email or phone number.');
            return;
        }

        // Validate password
        const password = document.querySelector('input[type="password"][placeholder="Password"]').value;
        if (!password) {
            alert('Please enter your password.');
            return;
        }

        // If all fields are valid, submit the form
        alert('Form submitted successfully!');
        form.submit();
    });
});