function main(){
    var button = $("#counter");
    button.click(function(){
        //Create a request object
        var request = XMLHttpRequest();
        //capture a response and store it in a variable
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
        
        //Make a request
        request.open('GET', 'http://manickvennimalai.imad.hasura-app.io/counter', true);
        request.send(null);        
        
    });
    
}
$(document).ready(main);