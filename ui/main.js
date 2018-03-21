
    
    
    
function loadLoginForm() {
    var loginHtml = `
    <h3>Register to unlock bonus features!</h3>
    <input type = "text" id = "username" placeholder = "username" />
    <input type = "password" id = "password" />
    <br/><br/>
    <button type="submit" id="login_btn" class = "btn-primary btn-sm">Login</button>
    <button type="submit" id="register_btn" class = "btn-primary btn-sm">Register</button>
    `;
    
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username & password to login
    
    var submit = document.getElementById('login_btn');
    submin.click(function () {
    //   Create request variable
       var request = new XMLHttpRequest();
       request.onReadyStateChange = function() {
           if(request.readyState === XMLHttpRequest.DONE) {
               if(request.status === 200) {
                    submit.value = 'Sucess!';
               } else if(request.status === 403) {
                   submit.value = 'Invalid credentials. Try again?';
               } else if(request.status === 500) {
                   alert('Oops, something went wrong on the server.');
                   submit.value = 'Login';
               } else {
                   alert('Oops, something went wrong on the server.');
                   submit.value = 'Login';
               }
               
               loadLogin();
           }
       };
       
       var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
    });
    
    // Registering user
    var register = document.getElementById('register_btn');
    register.click(function() {
       var request = new XMLHttpRequest();
       request.onReadyStateChange = function() {
         if(request.readyState === XMLHttpRequest.DONE) {
            //  take some action
             if(request.status === 200) {
                 alert('User created successfully');
                 register.value = 'Registered';
             } else {
                 alert('Could not register the user');
                 register.value = 'Register';
             }
         }  
       };
       
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    });
}

function loadLoggedInUser(username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `<h3> Heyya <i>${username}</i>
    <a href='/logout'>Logout</a>
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) {
                var content = '<ul>';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;
                }
                content += "</ul>";
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}

loadLogin();

loadArticles();
