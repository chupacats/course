'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt('Один из последних просмотренных фильмов', ''),
  b = prompt('На сколько его оцените?', ''),
  c = prompt('Один из последних просмотренных фильмов', ''),
  d = prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b; //почему
personalMovieDB.movies[c] = d;

console.log('Database:', personalMovieDB);
