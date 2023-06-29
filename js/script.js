/* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...',
	],
};

const advertisement = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = document.querySelector('ul.promo__interactive-list');

advertisement.forEach(adv => adv.remove());

genre.textContent = 'драма';

poster.style.backgroundImage = 'url(../img/bg.jpg)';

createMovieList(movieList, movieDB.movies);

function createMovieList(movieContainer, data) {
	movieContainer.innerHTML = '';

	data.sort();

	data.forEach((movie, i) => {
		movieContainer.innerHTML += `
			 <li class="promo__interactive-item">${i + 1}. ${movie}
             <div class="delete"></div>
         </li>
		`;
	});
}
