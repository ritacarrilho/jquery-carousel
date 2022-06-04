

$(function() {
    //* criar as img e atribuir o src a cada img     
    for (var i = 0; i < 5; ++i) {
        var imgSmall = '<img id="img-'+i+'" class="img-sm" src="img/img'+i+'.jpg"></    img>'

        $('.container2').append(imgSmall);
    }

    console.log($('.img-sm'))

    //atribuir o src a cada img
    // var i = 0;
    // $('.img-sm').each(function() {
    //     $(this).attr("src", "img/img"+i+".jpg");
    //     ++i;
    // })


    //* colocar o data attr src dentro do click - ir buscar o src das imagens   pequenas e passar para a grande
    $('.img-sm').on('click', function(event) {
        console.log($(event.target).attr('src'));
        
        var imgSrc = $(this).attr('src');

        $('#img-bg').attr('src', imgSrc);

        $('.img-sm').removeClass('border-selected');
     
        $(this).addClass('border-selected');

    });


    //* botão prev e next
    $('#next-btn').on('click', function() {
        


    })
});