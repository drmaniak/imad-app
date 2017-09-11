function main(){
    $('.first').hide();
    $('.first').fadeIn(500);
    $('.second').hide();
    $('.first').on('click', function (){
        $('.second').slideToggle(500);
        $(this).toggleClass('third');
    });
    var $image = $('#madi');
    var marginLeft = 0;
    function moveRight(){
        marginLeft = marginLeft + 10;
        $image.css("marginLeft", marginLeft + "px");
    }
    $image.on('click', function(){
        var interval = setInterval(moveRight, 1000);
        
    //    $image.css("marginLeft", "100px");
    });
    
}
$(document).ready(main);