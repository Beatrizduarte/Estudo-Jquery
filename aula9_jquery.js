$(function(){
    $('#azul').click(function(){
        $('p').css("background-color","#000099");
        $('p').fadeOut(3000);
        $('p').fadeIn(3000);
    });

    $('#vermelho').click(function(){
        $('p').css("background-color","#ff3300");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color','#ff3300');
        $('#mensagem').css('border','1px solid #ff3300');
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut('fast');
    })
});