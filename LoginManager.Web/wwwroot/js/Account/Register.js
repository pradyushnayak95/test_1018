//$(document).ready(function () {
    
//    function validatePassword() {
//        var password = $('#Password').val();
//        var passwordError = "";
//        var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{6,}$/;

//        if (!passwordPattern.test(password)) {
//            passwordError = "Password must be at least 6 characters long, with at least one capital letter, one number, and one alphabet.";
//        }

//        $('#passwordError').text(passwordError);
//        return passwordError === "";
//    }

//    // Check password validation on form submission
//    $('form').submit(function (event) {
//        if (!validatePassword()) {
//            event.preventDefault(); 
//        }
//    });

//    // Validate password on input change
//    $('#Password').on('input', function () {
//        validatePassword();
//    });
//});