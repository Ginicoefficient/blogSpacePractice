let postsArray = [];
const titleInput = document.getElementById("blog-title-field");
const bodyInput = document.getElementById("blog-body-field");

//gets first five blog posts from api and used callback function to render to DOM
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts(postsArray);
  });

//renders content of postsArray
const renderPosts = (postArr) => {
  const blogHtml = postArr
    .map((post) => {
      return `<div class="post-container">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-body">${post.body}</p>
                <hr>
            </div>`;
    })
    .join("");
  document.getElementById("blog-content").innerHTML = blogHtml;
};

//function that runs when submit post is hit
//takes value of title and body in new post, creates new post object
//sends new post object as a JSON object to API w/ header info
//then returns that request as JS object with title, body, and post ID from API
const submitPost = (e) => {
  e.preventDefault();

  const newPost = {
    title: titleInput.value,
    body: bodyInput.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts(postsArray);
    });

  document.getElementById("blog-submission").reset();
  // titleInput.value = "";
  // bodyInput.value = "";
};

document.addEventListener("submit", submitPost);
