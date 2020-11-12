// onload
window.onload = function () {

    // check if set username
    let usernameField = document.querySelector("#username");
    let username = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (username.length > 0) {
        // pick last username from cookie storage
        usernameField.value = username;
        usernameField.setAttribute('disabled', 'disabled');
        document.querySelector('#message').focus();
    } else {
        // focus on username field
        usernameField.focus();
    }


}
