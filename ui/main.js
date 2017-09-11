function main(){
    $('.first').hide();
    $('.first').fadeIn(500);
    $('.second').hide();
    $('.first').on('click', function (){
        $('.second').slideToggle(500);
        $(this).toggleClass('third');
    });
    var $image = $('#madi');
    $image.on('click', function(){
        $image.style.marginLeft = '100px';
    });
    
}
$(document).ready(main);