document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const firstName = document.querySelector('input[type="text"][placeholder="First Name"]').value;
        if (!firstName) {
            alert('Please enter your first name.');
            return;
        }

        
        const lastName = document.querySelector('input[type="text"][placeholder="Last Name"]').value;
        if (!lastName) {
            alert('Please enter your last name.');
            return;
        }

        
        const email = document.querySelector('input[type="email"][placeholder="Email"]').value;
        if (!email) {
            alert('Please enter your email.');
            return;
        }

        
        const password = document.querySelector('input[type="password"][placeholder="Password"]').value;
        if (!password) {
            alert('Please enter a password.');
            return;
        }

      
        const dob = document.querySelector('input[type="date"]').value;
        if (!dob) {
            alert('Please enter your date of birth.');
            return;
        }

        
        const gender = document.querySelector('input[type="radio"][name="gender"]:checked');
        if (!gender) {
            alert('Please select your gender.');
            return;
        }

       
        alert('Form submitted successfully!');
        form.submit();
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

       
        const emailOrPhone = document.querySelector('input[type="text"][placeholder="Email or Phone"]').value;
        if (!emailOrPhone) {
            alert('Please enter your email or phone number.');
            return;
        }

        
        const password = document.querySelector('input[type="password"][placeholder="Password"]').value;
        if (!password) {
            alert('Please enter your password.');
            return;
        }

       
        alert('Form submitted successfully!');
        form.submit();
    });
});
