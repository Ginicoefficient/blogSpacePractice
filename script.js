fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    console.log(postArr);
    blogDataHtml(postArr);
  });

const blogDataHtml = (postArr) => {
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
