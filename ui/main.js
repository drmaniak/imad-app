console.log('Loaded!');
function main(){
    $('.bold').hide();
    $('.bold').fadeIn(500);
    $('.second').hide();
    $('.bold').on('click', function (){
        $(this).next().slideToggle(500);
        $(this).text("Shazam!!");
    })
    $(document).ready(main);
}