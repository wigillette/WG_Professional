const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes
    .add('/', '/')
    .add('coursework', '/coursework')
    .add('experiences', '/experiences')
    .add('aspirations', '/aspirations')
    .add('updates', '/updates');