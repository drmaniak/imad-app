function main(){
    var button = $("#counter");
    button.click(function(){
        
        var request = XMLHttpRequest();
        
        request.onreadystatechange = function() {
            if(request.readyState === XMLHttpRequest.DONE){
                //take action
                if(request.status === 200){
                    var counter = request.responseText;
                    var span = $("#count"); 
                    span.html(counter);
                }
            }
        };
        
        
    });
    
}
$(document).ready(main);