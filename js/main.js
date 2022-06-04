// generate images and give an attibute src to each one
$(function() {  
    for (var i = 0; i < 5; ++i) {
        var imgSmall = '<img id="img-'+i+'" class="img-sm" src="img/img'+i+'.jpg"></    img>'

        $('.container2').append(imgSmall);
    }

    console.log($('.img-sm'))

    //* add click event to attribute src click (assign small img attr to bigger img)
    $('.img-sm').on('click', function(event) {
        console.log($(event.target).attr('src'));
        
        var imgSrc = $(this).attr('src');

        $('#img-bg').attr('src', imgSrc);

        $('.img-sm').removeClass('border-selected');
     
        $(this).addClass('border-selected');

    });

    //* next button
    $('#next-btn').on('click', function(event) {
        e.preventDefault();

        var imgSrc = $(this).attr('src');

        $('#img-bg').attr('src', imgSrc);

        var currentSlide = $('#img-bg li.active');
        var nextSlide = $('#img-bg').attr('src', imgSrc).next();

        nextSlide.addClass('active').show;
    })
});