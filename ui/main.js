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
};


$(document).ready(main);