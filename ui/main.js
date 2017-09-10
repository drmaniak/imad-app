function main(){
    $('.first').hide();
    $('.first').fadeIn(500);
    $('.second').hide();
    $('.first').on('click', function (){
        $(this).next().slideToggle(500);
        $(this).text("Shazam!!");
    })
    
}
$(document).ready(main);