const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 31) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}