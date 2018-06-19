



function getNewPost(){
  var url = "https://jsonplaceholder.typicode.com/posts/" + Math.round(Math.random() * 100) + "";

  var result;
  $.ajax({
    url: url 
  }).done(function(resp) {
    displayResult(resp, buildPost);
  });
 
}

function displayResult(resp, cb) {
  console.log(resp);

  cb(resp);
}

function buildPost(resp) {
  var body = document.querySelector('#main');
  var post = document.createElement('div');
  post.classList.add('post');

  var title = document.createElement('div');
  title.classList.add('title');
  title.innerText = resp.title;
  var copy = document.createElement('div');
  copy.classList.add('copy');
  copy.innerText = resp.body;
  post.append(title, copy);
  body.prepend(post);
}

getNewPost();


