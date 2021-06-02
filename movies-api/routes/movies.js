const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async function(req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock)
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (e) {
      next(e)
    }
  })

  router.get('/:movieId', async function(req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0])
      res.status(200).json({
        data: movies,
        message: 'movies retrived'
      })
    } catch (e) {
      next(e)
    }
  })

  router.post('/', async function(req, res, next) {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id)
      res.status(201).json({
        data: createdMovieId,
        message: 'movies created'
      })
    } catch (e) {
      next(e)
    }
  })

  router.put('/:movieId', async function(req, res, next) {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id)
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated'
      })
    } catch (e) {
      next(e)
    }
  })

  router.delete('/:movieId', async function(req, res, next) {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id)
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted'
      })
    } catch (e) {
      next(e)
    }
  })
}

module.exports = moviesApi;
