const submitBtn = document.getElementById("submitBtn");
function showMovies(recommededMovies) {
  //   console.log(recommededMovies);
  const results = document.getElementById("results");

  //Creating Table
  const table = document.createElement("table");
  table.setAttribute("id", "moviesTable");
  results.appendChild(table);

  //Creating Row
  const row = document.createElement("tr");
}
async function getMovies() {
  const res = await fetch("./data.json");
  const movies = await res.json();
  return movies;
}
async function getDropDownValues() {
  const genreElem = document.getElementById("genre");
  const yearElem = document.getElementById("year");
  const langElem = document.getElementById("language");
  const ratingElem = document.getElementById("rating");

  const genre = genreElem.value;
  const year = yearElem.value;
  const language = langElem.value;
  const rating = ratingElem.value;
  const movies = await getMovies();
  const filteredMovies = movies.filter((movie) => {
    return (
      (Array.isArray(movie.genres)
        ? movie.genres.join(" ").includes(genre)
        : movie.genres === genre) &&
      movie.original_language === language &&
      new Date(movie.release_date).getFullYear() == year &&
      movie.vote_average >= rating
    );
  });
  // console.log(filteredMovies);
  showMovies(filteredMovies);
}
submitBtn.addEventListener("click", getDropDownValues);
