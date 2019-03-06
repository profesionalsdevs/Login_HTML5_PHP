$(document).ready(() => {

    $('#login_form').submit((e) => {
        const postData = {
            Username: $('#username'),
            Password: $('#password')
        };

        $.post('PHP/login.php', postData, (response) => {
            $('#login_form').trigger('reset');
            console.log(response);

            if (response === 1) {
                window.location = 'home.html';
            }
            else {
                console.log('Something is wrong');
            }
        });
        e.preventDefault();
    });

});