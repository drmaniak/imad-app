function main(){
    var counter = 0;
    var button = $("#counter");
    button.click(function(){
        counter += 1;
        var span = $("#count"); 
        span.html(counter);
    });
    
}
$(document).ready(main);