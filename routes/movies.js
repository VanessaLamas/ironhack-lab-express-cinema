const express = require('express');
const router = express.Router();

// llamando al modelo
const Movie = require('../models/Movie.model');

// renderizar la lista de peliculas
router.get('/movies', (request, response) => {
    Movie.find()
        .then((data) => {
            console.log(data);
            response.render('all-movies', { data });
        })
});

// renderizar la pelicula
router.get('/movies/:moviesId', (req, res) => {
    const { moviesId } = req.params;
    Movie.findById(moviesId)
        .then(data => res.render('profile-movie.hbs', { data }))
        .catch(error => {
            console.log('Error while retrieving movie details: ', error);
            // Call the error-middleware to display the error page to the user
            next(error);
        })
});

module.exports = router;