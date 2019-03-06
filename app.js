$(document).ready(() => {

    /* alertify.set('notifier','position', 'top-center'); */

    $('#login_form').submit((e) => {
        const postData = {
            username: $('#username').val(),
            password: $('#password').val()
        };

        /* $.post('PHP/signin.php', postData, (response) => {

            $('#login_form').trigger('reset');

            console.log(response);

            if (response == 1) {
                alertify.success('Youre welcome');
                window.location = 'home.html';
            }
            else {
                alertify.success('Something is wrong');
            }
        }); */

        $.ajax({
            type: "POST",
            url: "PHP/signin.php",
            data: postData,
            success: function(r)
            {
                if (r == 1) {
                    alertify.success('Youre welcome');
                } else {
                    alertify.error('Something is wrong');
                }
            }
        })
        
        e.preventDefault();
    });

    $('#register_form').submit((e) => {
        const postData = {
            first_name: $('#firname').val(),
            last_name: $('#lasname').val(),
            username: $('#usnamereg').val(),
            password: $('#passwreg').val()
        };

        console.log('Hello')

        $.post('PHP/signup.php', postData, (response) => {
            
            $('#register_form').trigger('reset');

            console.log(response);

            if (response == 1) {
                alertify.success('Registered successfully');
            } else {
                alertify.error('Something is wrong');
            }

        });
        e.preventDefault();
    });

});