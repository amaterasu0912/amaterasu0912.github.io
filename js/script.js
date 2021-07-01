

const personalMovieDB = {   
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while(personalMovieDB.count == ''||personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
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
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
        }
        let item;
        let i;
        personalMovieDB.genres.forEach(function(item, i , genres){
            console.log(`Любимый жанр ${i + 1} - это  ${item}`);
        });
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 ){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.writeYourGenres();
console.log(personalMovieDB);