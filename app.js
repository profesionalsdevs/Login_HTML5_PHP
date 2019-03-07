$(document).ready(() => {

    alertify.set('notifier','position', 'top-center');

    $('#login_form').submit((e) => {
        const postData = {
            username: $('#username').val(),
            password: $('#password').val()
        };

        console.log($('#username').val());
        console.log($('#password').val());
        console.log(postData['username']);
        console.log(postData['password']);

        $.post('PHP/login.php', postData, (response) => {
            $('#login_form').trigger('reset');
            console.log(response);

            if (response == 1) {
                alertify.success('Youre welcome');
                window.location = "home.html";
            }
            else {
                alertify.success('Something is wrong');
            }
        });
        e.preventDefault();
    });

    $('#register_form').submit((e) => {
        const postData = {
            r_firstname: $('#r_firstname').val(),
            r_lasname: $('#r_lasname').val(),
            r_usnamereg: $('#r_usnamereg').val(),
            r_passwreg: $('#r_passwreg').val()
        };

        $.post('PHP/register.php', postData, (response) => {
            
            $('#register_form').trigger('reset');

            console.log(response);

            if (response == 1) 
            {
                alertify.success('Registered successfully');
            } 
            else 
            {
                alertify.error('Something is wrong');
            }

        });
        e.preventDefault();
    });

});