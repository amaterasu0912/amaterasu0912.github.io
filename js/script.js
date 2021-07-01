const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};


for (let i = 0; i < 2; i++){
    let a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько его оцените?');
        if (a != null && b != null && a != ''  && b != '' && a.length <= 50 && b.length <= 50){
            personalMovieDB.movies[a] = b; 
        } else {
            a = prompt('Один из последних просмотренных фильмов?');
            b = prompt('На сколько его оцените?');
            personalMovieDB.movies[a] = b; 
    }  
}

if (personalMovieDB.count < 10 ){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);