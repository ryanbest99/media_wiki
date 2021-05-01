const input = document.getElementById("search-input");
const btn = document.getElementById("btn");
console.log(input.value);

const city = document.querySelector(".city");

btn.addEventListener("click", () => {
  console.log("clicked");
  const searchValue = input.value;
  const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=${searchValue}&redirects=`;
  console.log(url);
  fetch(url)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      console.log(data);

      let page = data.query.pages;
      console.log(page);
      let pageId = Object.keys(data.query.pages);
      console.log(pageId);

      let aboutPage = page[pageId];
      console.log(aboutPage);

      let aboutCity = aboutPage.extract;
      console.log(aboutCity);
      console.log(typeof aboutCity);

      let string = aboutCity.split(".");
      console.log(string);

      city.textContent = aboutPage.extract;
    });
});
