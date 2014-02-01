var router = require('koa-route');
var views = require('koa-render');
var serve = require('koa-static');

module.exports = function(app, config, errors) {

  // set views engine
  app.use(views(config.views.path, config.views.engine));

  // serve build files
  app.use(serve(app.directory + '/build'));

  // render index
  app.use(router.get('/*', function *(next) {
    var locals = {
      title: 'Example App'
    };
    this.body = yield this.render('index', locals);
  }));


};
