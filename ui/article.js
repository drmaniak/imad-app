// Eg: coco98.imad.hasura-app.io/articles/article-one will result in article-one
var currentArticleTitle = window.location.pathname.split('/')[2];


function loadCommentForm() {
    var commentFormHtml = `
        <h5>Submit a comment</h5>
        <textarea id="comment_text" rows="5" cols="100" placeholder="Enter your comment here..."></textarea>
        <br/>
        <button type="submit" id="submit" class="btn-primary btn-sm">Submit</button>
        <br/>`;
        
    document.getElementById('comment_form').innerHTML = commentFormHtml;
        
    //Submit username/password to login
    var submit = document.getElementById('submit');
    
    submit.onclick = function() {
      var request = new XMLHttpRequest();
      
      request.onReadyStateChange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action 
            if (request.status === 200) {
                document.getElementById('comment_text').value = '';
                loadComments();
            } else {
                alert('Error, could not submit comment');
            }
            submit.value = 'Submit';
        }  
      };
      
      var comment = document.getElementById('comment_text').value;
      request.open('POST', '/submit-comment' + currentArticleTitle, true);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify({comment: comment}));
      submit.value = 'Submitting';
    };
        
}

function loadLogin() {
    var request = new XMLHttpRequest();
    
    request.onReadyStateChange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadCommentForm(this.resonseText);
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function escapeHTML (text) {
    var $text = document.createTextNode(text);
    var $div = document.createElement('div');
    $div.appendChild($text);
    return $div.innerHTML;
}

function loadComments () {
    var request = new XMLHttpRequest();
    request.onReadyStateChange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          var comments = document.getElementById('comments')
          
      }  
    };
}