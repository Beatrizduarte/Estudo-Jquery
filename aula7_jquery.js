$(function(){
    $('#azul').click(function(){
        $('p').css("background-color","#000099");
        $('p').fadeOut(3000);
        $('p').fadeIn(3000);
    });

    $('#vermelho').click(function(){
        $('p').css("background-color","#ff3300");
        $('p').fadeOut(3000);
        $('p').fadeIn(3000);
    })
});