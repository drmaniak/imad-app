function main(){
    $('.first').hide();
    $('.first').fadeIn(500);
    $('.second').hide();
    $('.first').on('click', function (){
        $('.second').slideToggle(500);
        $(this).text("Heyya Bud!!");
    })
    
}
$(document).ready(main);