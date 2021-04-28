// Select elements
const input = document.getElementById("search-input");
const btn = document.getElementById("btn");
console.log(input.value);

btn.addEventListener("click", () => {
  console.log("clicked");
  const searchValue = input.value;
  const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchValue}`;
  console.log(url);
  fetch(url)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
});
