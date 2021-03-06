var React               = require('react');
var Router              = require('react-router');
var Route               = Router.Route;
var DefaultRoute        = Router.DefaultRoute;
var NotFoundRoute       = Router.NotFoundRoute;
var Redirect            = Router.Redirect;

module.exports = (
    <Route name="home" handler={require('./app.jsx')} path="/">
      <Route handler={require('./page.jsx')} path="*" />
      <NotFoundRoute handler={require('./not-found.jsx')} />
    </Route>
);