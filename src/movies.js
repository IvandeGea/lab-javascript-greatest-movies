// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorArray = moviesArray.map(moviesArray => moviesArray.director)
    return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let dramaStevenArray = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))


    return dramaStevenArray.length;

}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;
    let suma = moviesArray.reduce((acc, movie) => {
        if (!moviesArray) return acc;

        else return acc + movie.score;;
    }, 0);

    let avg = suma / moviesArray.length;



    return Math.round(avg * 100) / 100

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))

    if (dramaMovies.length === 0) return 0

    let mediana = dramaMovies.reduce((total, next) => total + next.score, 0) / dramaMovies.length;


    return Math.round(mediana * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let ordenedArray = Array.from(moviesArray);

    ordenedArray.sort(function (a, b) {

        if (a.year === b.year) {
            ordenedArray.sort(function (a, b) {
                return a.title.localeCompare(b.title)
            })
        }
        else { return a.year - b.year }
    })
    return ordenedArray
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let moviesCopy = Array.from(moviesArray);

    moviesCopy.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    let moviesCopy20 = moviesCopy.slice(0, 20);
    return moviesCopy20.map((movie) => movie.title)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }



