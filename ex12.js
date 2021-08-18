const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const count = 2;
for (var i = 0; i < count; ++i) {
    const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
    const lastFilmRaiting = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
};

console.log(personalMovieDB);