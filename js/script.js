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

	sortMovieList(data);

	data.forEach((movie, i) => {
		movieContainer.innerHTML += `
			 <li class="promo__interactive-item">${i + 1}. ${movie}
             <div class="delete"></div>
         </li>
		`;
	});

	const btnsDelete = movieContainer.querySelectorAll('.delete');

	btnsDelete.forEach((btn, i) => {
		btn.addEventListener('click', event => {
			event.preventDefault();

			btn.parentElement.remove();

			data.splice(i, 1);

			createMovieList(movieContainer, data);
		});
	});
}

function sortMovieList(arr) {
	arr.sort();
}

const formAddMovie = document.querySelector('form.add');

formAddMovie.addEventListener('submit', event => {
	event.preventDefault();

	const input = formAddMovie.querySelector('input.adding__input'),
		inputLoveMovie = formAddMovie.querySelector('input[type=checkbox]');

	if (!input.value) return;

	if (inputLoveMovie.checked) {
		console.log('Добавляем любимый фильм');
	}

	if (input.value.length > 21) {
		input.value = `${input.value.substring(0, 21)}...`;
	}

	movieDB.movies.push(input.value);

	createMovieList(movieList, movieDB.movies);

	console.log(movieDB.movies);

	event.target.reset();
});
