console.log('sanity check');

function checkPasswordMatch() {
    let password = $("#password").val();
    let confirmPassword = $("#retypepassword").val();
    if (password != confirmPassword)
        $("#passwordcheck").html("Passwords does not match!");
    else
        $("#passwordcheck").html("Passwords match.");
}

