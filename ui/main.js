function main(){
    $('.first').hide();
    $('.first').fadeIn(500);
    $('.second').hide();
    $('.first').on('click', function (){
        $(this).next().show();
        $(this).text("Shazam!!");
    })
    
}
$(document).ready(main);