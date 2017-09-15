var main= function(){
    var button = $("#counter");
    button.click(function(){
        //Create a request object
        var request =new XMLHttpRequest();
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
    //submit name
    
    var submit = $("#submit_btn");
    submit.click(function(){
        //make a request to the server and send name
        // Capture a list of name and render it as a list
        
        //Create a request object
        var request =new XMLHttpRequest();
        //capture a response and store it in a variable
        request.onreadystatechange = function() {
            if(request.readyState === XMLHttpRequest.DONE){
                //take action
                if(request.status === 200){
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = "";
                    for(var i=0;i<names.length; i++){
                    list+= "<li>" + names[i] + "</li>"; 
                    }
                    var ul = $("#namelist");
                    ul.html(list);
                    
                }
            }
        };
        
        
        var nameInput = $("#name");
        var name = nameInput.val();
        //Make a request
        request.open('GET', 'http://manickvennimalai.imad.hasura-app.io/submit-name?name=' +name, true);
        request.send(null);
    });   
};



$(document).ready(main);



