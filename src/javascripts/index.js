// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//TODO

import { movies } from './movies';

let featuredMovie = document.querySelector('.featured');
for(let m of movies)
{
    let movieThumb = document.getElementById('m' + m.id);
    movieThumb.innerHTML = `
    <img src="${m.poster}">
    `;

    movieThumb.onclick = function()
    {
        selectMovie(m);
    }
}

function selectMovie(m)
{
    featuredMovie.innerHTML = `
    <img src="${m.poster}" style="float: left;">
    <h1>${m.title}</h1>
    <p>${m.plot}</p>
    `;
}

function searchMovies(event)
{
    if(event)
    {
        event.preventDefault();
    }

    let input = document.querySelector('[type="search"]').value || "";
    for(let m of movies)
    {
        let movieThumb = document.getElementById('m' + m.id);
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1)
        {
            //movieThumb.classList.add('hidden'); //This works too
            movieThumb.style.display = 'none';
        }
        else
        {
            //movieThumb.classList.remove('hidden'); //This works too
            movieThumb.style.display = 'block';
        }
    }
}

document.querySelector('button').onclick = searchMovies;
document.querySelector('[type="search"]').onsearch = searchMovies;
document.forms[0].addEventListener('submit', searchMovies, false);