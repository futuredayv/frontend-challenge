const routes = require('next-routes')();

routes.add('/', '/home/index')
    .add('/movies', '/movies/index')

module.exports = routes;
