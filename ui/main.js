function main(){
    $('.first').hide();
    $('.first').fadeIn(500);
    $('.second').hide();
    $('.first').on('click', function (){
        $('.second').slideToggle(500);
        $(this).toggleClass('third');
    });
    var $image = $('#madi');
    $('.img-medium').on('click', function(){
        $(this).animate({width:'300px'}, 500);
        $(this).addClass('img-large');
        $(this).removeClass('img-medium');
    });
    
    $('.img-large').on('click', function(){
        $(this).animate({width:'186px'}, 500);
        $(this).addClass('img-medium');
        $(this).removeClass('img-large');
    });
    
    /*var marginLeft = 0;
    function moveRight(){
        marginLeft = marginLeft + 1;
        $image.css("marginLeft", marginLeft + "px");
    }
    $image.on('click', function(){
        var interval = setInterval(moveRight, 50);
        
    //    $image.css("marginLeft", "100px");
    });*/
    
}
$(document).ready(main);