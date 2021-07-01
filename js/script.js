const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько его оцените?'),
    c = prompt('Один из последних просмотренных фильмов?'),
    d = prompt('На сколько его оцените?');

let movies = {
    a:b,
    c:d
};

console.log(movies);
console.log(personalMovieDB);