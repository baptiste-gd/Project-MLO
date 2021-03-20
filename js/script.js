$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        autoplay:true,   
        smartSpeed: 1000, 
        autoplayTimeout:7000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();
        
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                 
                if(json.isSuccess) 
                {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .comments').html(json.firstnameError);
                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#phone + .comments').html(json.phoneError);
                    $('#subject + .comments').html(json.subjectError);
                    $('#message + .comments').html(json.messageError);
                }                
            }
        });
    });
});