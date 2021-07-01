let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == ''||numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function showMyDB(){
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 0; i < 3; i++){
        let b = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = b;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
showMyDB();
writeYourGenres();