

$(document).ready(function(){


    $('.hotal-manu').show();
    $('.ticket-manu').hide();
    $('.price-manu').hide();



    $('#hotal span').addClass('line');


    // for hotal 

    $('#hotal').click(function(){
        $('.hotal-manu').show();
        $('.ticket-manu').hide();
        $('.price-manu').hide();

        // click 

        $('#hotal span').addClass('line');
        $('#ticket span').removeClass('line');
        $('#price span').removeClass('line');


    });
    // for ticket 

    $('#ticket').click(function(){
        $('.hotal-manu').hide();
        $('.ticket-manu').show();
        $('.price-manu').hide();


        // click 

        $('#hotal span').removeClass('line');
        $('#ticket span').addClass('line');
        $('#price span').removeClass('line');

    });
    // for price 

    $('#price').click(function(){
        $('.hotal-manu').hide();
        $('.ticket-manu').hide();
        $('.price-manu').show();

        
        // click 



        $('#hotal span').removeClass('line');
        $('#ticket span').removeClass('line');
        $('#price span').addClass('line');

    });

});