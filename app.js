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

    $('#signup_form').submit((e) => {
        const postData = {
            first_name: $('#firstname').val(),
            last_name: $('#lastname').val(),
            username: $('#signup_username').val(),
            password: $('#signup_password').val()
        }

        $.post('PHP/signup.php', postData, (response) => {
            
            $('#signup_form').trigger('reset');

            console.log(response);

            if (response === 1) {
                alert('Registered successfully');
            } else {
                alert('Some thing is wrong');
            }

        });
        e.preventDefault();
    })

});