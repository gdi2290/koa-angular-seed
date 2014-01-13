var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var refresh    = require('gulp-livereload');
var livereload = require('tiny-lr');

var server = livereload();
var paths  = require('./config/path.json');

gulp.task('scripts', function(cb) {
  return gulp.task(['client/**/*.js'])
    .pipe(browserify())
    .pipe(concat('dest.js'))
    .pipe(gulp.dest('build'))
    .pipe(refresh(server));
});

gulp.task('uglify', function(cb) {
  return gulp.src(['client/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function(cb) {
  return gulp.src(paths.stylus.src)
  .pipe(stylus())
  .pide(gulp.dest(paths.stylus.dest));
});

gulp.task('server', function() {
  server.listen(35729, function(err) {
    if (err) return console.log(err);
  });
});

gulp.task('default', function(cb) {
  gulp.run('stylus');
});

