$(document).ready(function() {
    $('input.password').on('input', function() {
        var password = $(this).val();

        if (password.length >= 8) {
            $('.pass-strength').removeClass('weak medium strong').addClass('weak').text("weak");
        }
        if (/[A-Za-z]/.test(password) && /[0-9]/.test(password)) {
            $('.pass-strength').removeClass('weak medium strong').addClass('medium').text("medium");

        }
        if (/['!@#$%^&*']/.test(password) && password.length >= 11) {
            $('.pass-strength').removeClass('weak medium strong').addClass('strong').text("strong");

        }


    });
});