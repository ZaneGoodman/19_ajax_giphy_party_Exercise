const form = document.querySelector("form");
const gifContainer = document.querySelector("div");
const input = document.querySelector("input");

async function getGif() {
  try {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    );
    appendRandomUrl(res.data.data);
  } catch {
    alert("Gif not found - Try again!");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  getGif();

  input.value = "";
});

$("#delete").on("click", function (e) {
  e.preventDefault();

  $("#gif-container > img").remove();
});

function appendRandomUrl(arr) {
  //make random number
  const randomGif = Math.floor(Math.random() * 49);
  const gif = document.createElement("img");
  //use random number to pick a random index in the passed in array & and use that url
  gif.src = arr[randomGif].images.original.url;
  gif.classList.add("img");
  gifContainer.append(gif);
}
