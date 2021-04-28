// Select elements
const input = document.getElementById("search-input");
const btn = document.getElementById("btn");
console.log(input.value);

// btn.addEventListener("click", () => {
//   console.log("clicked");
//   const searchValue = input.value;
//   const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchValue}`;
//   console.log(url);
//   fetch(url)
//     .then((resp) => {
//       console.log(resp);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// });

btn.addEventListener("click", () => {
  console.log("clicked");
  const searchValue = input.value;
  const url = `https://en.wikipedia.org/w/api.php?action=query&query&prop=revisions&rvprop=content&format=json&titles=${searchValue}`;
  console.log(url);
  fetch(url)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      console.log(data);

      let page = data.query.pages;
      let pageId = Object.keys(data.query.pages);
      console.log(pageId);
      let pageId2 = Object.keys(data.query.pages)[0];
      console.log(pageId2);
      let content = page[pageId].revisions[0]["*"];
      console.log(content);
    });
});
