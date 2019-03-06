$(document).ready(() => {

    $('#login_form').submit((e) => {
        const postData = {
            username: $('#username').val(),
            password: $('#password').val()
        };

        $.post('PHP/login.php', postData, (response) => {

            $('#login_form').trigger('reset');

            console.log(response);

            if (response == 1) {
                window.location = 'home.html';
            }
            else {
                console.log('Something is wrong');
            }
        });
        e.preventDefault();
    });

});