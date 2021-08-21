let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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
    const count = 2;
    for (let i = 0; i < count; ++i) {
        const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
        if (lastFilmName === null || lastFilmName.length < 1 || lastFilmName.length > 50) {
            --i;
            continue;
        }
        const lastFilmRaiting = prompt('На сколько оцените его?', '');
        if (lastFilmRaiting === null || lastFilmRaiting.length < 1) {
            --i;
            continue;
        }
        personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 31) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; ++i) {
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();
