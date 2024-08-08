let tunes = {};

fetch("tunes.json")
  .then((response) => response.json())
  .then((data) => {
    tunes = data;
    createTuneList();
  });

function createTuneList() {
  const tuneList = document.getElementById("tune-list");
  for (let key in tunes) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="tune.html?id=${key}">${tunes[key].title}</a>: ${tunes[key].description}`;
    tuneList.appendChild(li);
  }
}
