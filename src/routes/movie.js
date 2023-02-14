const { Router } = require('express');
const router = Router();
const _ = require('underscore')
const movie = require('../sample.json');

router.get('/', (req, res) =>{

    res.json(movie);
});

router.post('/', (req, res)=> {
    
    const { Name, director, year, rating } = req.body;
    if(Name && director && year && rating){
        const id = movie.length + 1;
        const Newmovie = {...req.body, id};
        movie.push(Newmovie);
        res.json(movie)
        res.json('saved');

    }else{

        res.send('Maloo');
    }
    res.send('Listo');
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(movie, (movies, i) => {
        if (movies.id == id) {
            movie.splice(i, 1);

        }

    });
    res.send(movie);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (id && title && director && year && rating) {
        _.each(movie, (movies, i) => {
            if (movies.id === id) {
                movies.title = title;
                movies.director = director;
                movies.year = year;
                movies.rating = rating;
            }
        });
        res.json(movie);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

module.exports = router;