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

// 
var loadLogin = function() {
    var request = new XMLHttpRequest();
    request.onReadyStateChange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
              loadLoggedInUser(this.resonseText);
          } else {
              loadLoginForm();
          }
      }  
    };
    
    request.open("GET", "/check-login", true);
    request.send(null);
};

var loadArticles = function() {
    var request = new XMLHttpRequest();
    request.onReadyStateChange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          var articles = $('.articles');
          if(request.status === 200) {
              var content = '<ul>';
              var articleData = JSON.parse(request.responseText);
              for (var i = 0; i < articleData.length; i++) {
                  content += `<li>
                  <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                  (${articleData[i].date.split('T')[0]})
                  </li>`;
              }
              content += '</ul>';
              articles.html(content);
          } else {
              articles.html('Oops, could not load the article data');
          }
      }  
    };
    
    request.open("GET","/get-articles", true);
    request.send(null);
};

var main = function() {
    
    function loadLogin() {
        var request = new XMLHttpRequest();
        request.onReadyStateChange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    loadLoggedInUser(this.resonseText);
                } else {
                    loadLoginForm();
                } 
            }  
        };
    
        request.open("GET", "/check-login", true);
        request.send(null);
    }
    
    function loadArticles() {
        var request = new XMLHttpRequest();
        request.onReadyStateChange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
              var articles = $('#articles');
              if(request.status === 200) {
                  var content = '<ul>';
                  var articleData = JSON.parse(request.responseText);
                  for (var i = 0; i < articleData.length; i++) {
                      content += `<li>
                      <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                      (${articleData[i].date.split('T')[0]})
                      </li>`;
                  }
                  content += '</ul>';
                  articles.html(content);
              } else {
                  articles.html('Oops, could not load the article data');
              }
          }  
        };
        
        request.open("GET","/get-articles", true);
        request.send(null);
        }
    
    function loadLoginForm() {
        var loginHtml = `
        <h3>Register to unlock bonus features!</h3>
        <input type = "text" id = "username" placeholder = "username" />
        <input type = "password" id = "password" />
        <br/><br/>
        <button type="submit" id="login_btn" class = "btn-primary btn-sm">Login</button>
        <button type="submit" id="register_btn" class = "btn-primary btn-sm">Register</button>
        `;
        
        $('#login_area').html(loginHtml);
        
        // Submit username & password to login
        
        var submit = $('#login_btn');
        submin.click(function () {
        //   Create request variable
           var request = new XMLHttpRequest();
           request.onReadyStateChange = function() {
               if(request.readyState === XMLHttpRequest.DONE) {
                   if(request.status === 200) {
                        submit.val('success');       
                   } else if(request.status === 403) {
                       submit.val('Invalid credentials. Try again?');
                   } else if(request.status === 500) {
                       alert('Oops, something went wrong on the server.');
                       submit.val('Login');
                   } else {
                       alert('Oops, something went wrong on the server.');
                       submit.val('Login');
                   }
                   
                   loadLogin();
               }
           };
           
           var username = $('#username').val();
           var password = $('#password').val();
           console.log('Username is:' + username);
           console.log('Password is:' + password);
           request.open('POST', '/login', true);
           request.setRequestHeader('content-type', 'application/json');
           request.send(JSON.stringify({username: username, password: password}));
           submit.val('Logging in');
        });
        
        // Registering user
        var register = $('#register_btn');
        register.click(function() {
           var request = new XMLHttpRequest();
           request.onReadyStateChange = function() {
             if(request.readyState === XMLHttpRequest.DONE) {
                //  take some action
                 if(request.status === 200) {
                     alert('User created successfully');
                     register.val('Registered');
                 } else {
                     alert('Could not register the user');
                     register.val('Register');
                 }
             }  
           };
           
           var username = $('#username').val();
           var password = $('#password').val();
           console.log('Username is:' + username);
           console.log('Password is:' + password);
           request.open('POST', '/create-user', true);
           request.setRequestHeader('content-type', 'application/json');
           request.send(JSON.stringify({username: username, password: password}));
           Register.val(' Registering');
        });
    }
    
    function loadLoggedInUser(username) {
        var loginArea = $('#login_area');
        loginArea.html(`<h3> Heyya <i>${username}</i>
        <a href='/logout'>Logout</a>
        `);
    }
    
    
    
};


$(document).ready(main);
