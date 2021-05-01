console.log('sanity check');

function checkPasswordMatch() {
    let password = $("#txtNewPassword").val();
    let confirmPassword = $("#txtConfirmPassword").val();
    if (password != confirmPassword)
        $("#CheckPasswordMatch").html("Passwords does not match!");
    else
        $("#CheckPasswordMatch").html("Passwords match.");
}

$(document).ready(function () {
    $("#txtConfirmPassword").keyup(checkPasswordMatch);
});