// COUNTER CODE WITHOUT JQUERY

    // var button = document.getElementById('counter');
    
    // button.onclick = function() {
    //     // Make a request to counter endpoint
    //     var request = new XMLHttpRequest();
    //     // Capture the response and store it in a variable
    //     request.onreadystatechange = function() {
    //       if (request.readyState === XMLHttpRequest.DONE){
    //         //   take some action
    //         if (request.status === 200) {
    //             var counter = request.responseText;
    //             var span = document.getElementById('count');
    //             span.innerHTML = counter.toString();
    //         }
    //       }  
            
    //     };
    //     //  Create a request object
    //     request.open('GET', 'http://manickvennimalai.imad.hasura-app.io/counter', true);
    //     request.send(null);
    
        
    // };
    
// SUBMIT NAME CODE WITHOUT JQUERY

    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var submit = document.getElementById("submit_btn");
    
    submit.onclick = function() {
        // Make a request to the server and send a name
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                if(request.status === 200) {
                    var names = request.responseText;
                    var list = "";
                    for(var i = 0; i < names.length; i++) {
                        list += "<li>" + names[i] + "</li>";
                    }
                    var ul = document.getElementById("nameList");
                    ul.innerHTML = list;
                }
            }
        };
        request.open("GET", "http://manickvennimalai.imad.hasura-app.io/submit-button?name="+ name, true );
        request.send(null);
        // Capture a list of names and render it as a list
        
    };
    

var main= function(){
    
    var button = $("#counter");
    button.click(function() {
        var request = new XMLHttpRequest();
        
        request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
              if(request.status === 200){
                    var counter = request.responseText;
                    var span = $("#count"); 
                    span.html(counter);
                } 
              else {
                  console.log("The request status is: " + request.status);
                  alert("The request status is: " + request.status);
              }
          }  
        };
        
        request.open("GET", "http://manickvennimalai.imad.hasura-app.io/counter", true );
        request.send(null);
    });
    
    // //  Submit name
    // var submit = $("#submit_btn");
    // submit.click(function(){
    //     //make a request to the server and send name
    //     // Capture a list of name and render it as a list
        
    //     //Create a request object
    //     var request =new XMLHttpRequest();
    //     //capture a response and store it in a variable
    //     request.onreadystatechange = function() {
    //         if (request.readyState === XMLHttpRequest.DONE){
    //             //take action
    //             if (request.status === 200) {
    //                     var names = request.responseText;
    //                     names = JSON.parse(names);
    //                     var list = "";
    //                     for (var i=0;i<names.length; i++) {
    //                     list+= "<li>" + names[i] + "</li>"; 
    //                 }
    //                 var ul = $("#namelist");
    //                 ul.html(list);
                    
    //             }
    //         }
    //     };
        
        
    //     var nameInput = $("#name");
    //     var name = nameInput.val();
    //     //Make a request
    //     request.open('GET', 'http://manickvennimalai.imad.hasura-app.io/submit-name?name=' +name, true);
    //     request.send(null);
    // });   
    
    var post = $("#post_btn");
    post.click(function(){
        var request =  new XMLHttpRequest();
        
        request.onreadystatechange = function(){
            if(request.readyState === XMLHttpRequest.DONE){
                if(request.status === 200){
                    var comments = request.responseText;
                    comments = JSON.parse(comments);
                    var list = "";
                    for(var i=0; i<comments.length; i++){
                        list+= "<li>" + comments[i] + "</li>";
                    }
                    var ul = $("#commentlist");
                    ul.html(list);
                }
            }
        };
        var commentInput = $("#comment");
        var comment = commentInput.val();
        
        request.open('GET', 'http://manickvennimalai.imad.hasura-app.io/comments?comment=' + comment, true);
        request.send(null);
    });
    
};

var pic = document.getElementById("madi");
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    pic.style.marginLeft = marginLeft + "px";
}

pic.onclick = function () {
  var interval = setInterval(moveRight, 100);  
};

$(document).ready(main);



