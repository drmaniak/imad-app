// Eg: coco98.imad.hasura-app.io/articles/article-one will result in article-one
var currentArticleTitle = window.location.pathname.split('/')[2];


function loadCommentForm() {
    var commentFormHtml = `
        <h5>Submit a comment</h5>
        <textarea id="comment_text" rows="5" cols="100" placeholder="Enter your comment here..."></textarea>
        <br/>
        <button type="submit" class="btn-primary btn-sm">Submit</button>
        <br/>`;
        
        document.getElementById('comment_form').innerHTML = commentFormHtml;
}