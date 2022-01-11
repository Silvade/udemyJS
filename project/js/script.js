/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img');
    adv.forEach(x => x.remove());

    const bg = document.querySelector('.promo__bg');

    const genre = bg.querySelector('.promo__genre');
    genre.textContent = 'ДРАМА';

    bg.style.backgroundImage = 'url("img/bg.jpg")';

    let filmList = document.querySelector('.promo__interactive-list');

    createMovieList(movieDB.movies, filmList);

    const addForm = document.querySelector('form.add');
    const newFilm = addForm.querySelector('.adding__input');
    const favorite = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let filmName = newFilm.value;
        if (filmName) {
            if (filmName.length > 21) {
                filmName = filmName.substring(0, 21) + '...';
            }
            if (favorite.checked) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(filmName);
            createMovieList(movieDB.movies, filmList);

            addForm.reset();
        }
    });

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        films.sort();
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
                </li>
                `});


        document.querySelectorAll('.delete').forEach((button, i) => {
            button.addEventListener('click', () => {
                button.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, filmList);
            });
        });
    };
});