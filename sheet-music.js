import ABCJS from "abcjs";

// Fetch the JSON data from the API
fetch("https://thesession.org/tunes/703?format=json")
  .then((response) => response.json())
  .then((data) => {
    // Access the relevant data from the JSON response
    const abcNotation = data.abc;

    // Render the ABC notation using ABCJS
    const sheetMusicContainer = document.getElementById("sheetMusicContainer");
    ABCJS.renderAbc(sheetMusicContainer, abcNotation);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
