// var submit = document.getElementById('submit_btn');
// submit.onclick = function() {
//     var request = new XMLHttpRequest();
//       request.onreadystatechange = function(){
//           if (request.readyState === 4) {
//               if (request.status === 200) {
//                     console.log("Logged in successfully");
//                     alert("Logged in successfully");
//               }else if (request.status === 403) {
//                     alert("Invalid username/password");
//               }else if (request.status === 500) {
//                     alert("Something went wrong on the server");
//               }
//           }
//       };
//         var username = document.getElementById('username').value;
//         var password = document.getElementById('password').value;
//         console.log("Username: " + username);
//         console.log("Password: " + password);
//         request.open("POST","http://manickvennimalai.imad.hasura-app.io/login", true );
//         request.setRequestHeader('Content-Type', 'application/json');
//         request.send(JSON.stringify({username: username, password: password}));
// };



var main= function(){
    
    
    
    // // Submit username/password
    
    // var submit = $("#submit_btn");
    // submit.click(function() {
    //   var request = new XMLHttpRequest();
    //   request.onreadystatechange = function(){
    //       if (request.readyState === 4) {
    //           if (request.status === 200) {
    //                 console.log("Logged in successfully");
    //                 alert("Logged in successfully");
    //           }else if (request.status === 403) {
    //                 alert("Invalid username/password");
    //           }else if (request.status === 500) {
    //                 alert("Something went wrong on the server");
    //           }
    //       }
    //   };
    //   var username = $("#username").val();
    //   var password = $("#password").val();
    //   console.log("Username: " + username);
    //   console.log("Password: " + password);
    //   request.open("POST", "http://manickvennimalai.imad.hasura-app.io/login", true);
    //   request.setRequestHeader('Content-Type', 'application/json');
    //   request.send(JSON.stringify({username: username, password: password }));
    // });    
    
    
    // // COUNTER CODE JQUERY
    // var button = $("#counter");
    // button.click(function() {
    //     var request = new XMLHttpRequest();
        
    //     request.onreadystatechange = function() {
    //       if (request.readyState === XMLHttpRequest.DONE) {
    //           if(request.status === 200){
    //                 var counter = request.responseText;
    //                 var span = $("#count"); 
    //                 span.html(counter);
    //             } 
    //           else {
    //               console.log("The request status is: " + request.status);
    //               alert("The request status is: " + request.status);
    //           }
    //       }  
    //     };
        
    //     request.open("GET", "http://manickvennimalai.imad.hasura-app.io/counter", true );
    //     request.send(null);
    // });
    
    // // NAMELIST CODE JQUERY
    
    // var submit = $("#submit_btn");
    // submit.click(function() {
    //   var request = new XMLHttpRequest();
    //   request.onreadystatechange = function(){
    //       if (request.readyState === 4) {
    //           if (request.status === 200) {
    //               var names = request.responseText;
    //               names = JSON.parse(names);
    //               var list = "";
    //               for (var i = 0; i < names.length; i++) {
    //                   list += "<li>" + names[i] + "</li>";
    //               }
    //               var li = $("#nameList");
    //               li.html(list);
    //           }
    //       }
    //   };
    //   var nameList = $("#name");
    //   var name = nameList.val();
       
    //   request.open("GET", "http://manickvennimalai.imad.hasura-app.io/submit-name?name="+ name, true);
    //   request.send(null);
    // });
    
    // // COMMENT CODE JQUERY
    
    // var post = $("#post_btn");
    // post.click(function () {
    //   var request = new XMLHttpRequest();
       
    //   request.onreadystatechange = function() {
    //       if (request.readyState === XMLHttpRequest.DONE) {
    //           if (request.status === 200) {
    //               var comments = request.responseText;
    //               comments = JSON.parse(comments);
    //               var list = "";
    //               for (var i = 0; i<comments.length; i++) {
    //                   list += "<li>" + comments[i] + "</li>";
    //               }
    //               var ul = $("#commentList");
    //               ul.html(list);
                   
    //           }
    //       }
    //   };
       
    //   var commentList = $("#comment");
    //   var comment = commentList.val();
       
    //   request.open("GET", "httm://manickvennimalai.imad.hasure-app.io/comments?comment=" + comment, true);
    //   request.send(null);
    // });
    
    
};


$(document).ready(main);


