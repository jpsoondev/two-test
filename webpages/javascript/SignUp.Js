    // Toggle visibility for the first password field
    const togglePassword1 = document.querySelector('#togglePasswordIcon1');
    const passwordField1 = document.querySelector('#password');

    togglePassword1.addEventListener('click', () => {
        const type = passwordField1.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField1.setAttribute('type', type);
        togglePassword1.classList.toggle('bi-eye');
        togglePassword1.classList.toggle('bi-eye-slash');
    });

    // Toggle visibility for the re-enter password field
    const togglePassword2 = document.querySelector('#togglePasswordIcon2');
    const passwordField2 = document.querySelector('#re-password');

    togglePassword2.addEventListener('click', () => {
        const type = passwordField2.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField2.setAttribute('type', type);
        togglePassword2.classList.toggle('bi-eye');
        togglePassword2.classList.toggle('bi-eye-slash');
    });