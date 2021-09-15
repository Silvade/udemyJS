const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 31) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; ++i) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genre === null || genre.length < 1) {
                --i;
                continue;
            }
            personalMovieDB.genres[i] = genre;
        }

        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};
