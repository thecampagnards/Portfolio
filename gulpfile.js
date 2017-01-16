// Requis
var gulp = require('gulp')
var minify = require('gulp-minify')
var cleanCSS = require('gulp-clean-css')
var watch = require('gulp-watch')
var concat = require('gulp-concat')
var htmlmin = require('gulp-htmlmin')
var sass = require('gulp-sass')
var connect = require('gulp-connect')
var livereload = require('gulp-livereload')
var http = require('http')
var st = require('st')
var uglify = require('gulp-uglify')
var imageResize = require('gulp-image-resize')

var source = './src' // dossier de travail
var destination = './dist' // dossier à livrer

gulp.task('sass', function () {
  return gulp.src(source + '/sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(gulp.dest(source + '/css/compiled'))
})

gulp.task('minify-css', function () {
  // ordre de preference dans un tableau
  return gulp.src([source + '/css/*.css', source + '/css/compiled/*.css'])
    .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(destination))
    .pipe(livereload())
})

gulp.task('resize-image-projet', function () {
  gulp.src(source + '/img/projets/*.{png,jpg}')
    .pipe(imageResize({
      width: 465,
      height: 361
    }))
    .pipe(gulp.dest(destination + '/img/projets/'))
})

gulp.task('resize-image-experience', function () {
  gulp.src(source + '/img/experiences/*.{png,jpg}')
    .pipe(imageResize({
      height: 250
    }))
    .pipe(gulp.dest(destination + '/img/experiences/'))
})

gulp.task('minify-js', function () {
  // ordre de preference dans un tableau
  return gulp.src([
    source + '/js/jquery-3.1.1.min.js',
    source + '/js/*.js',
    source + '/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destination))
    .pipe(livereload())
})

gulp.task('minify-html', function () {
  return gulp.src(source + '/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destination))
    .pipe(livereload())
})

gulp.task('watch', ['server'], function () {
  livereload.listen({ basePath: 'dist' })
  gulp.watch(source + '/sass/*.sass', ['sass'])
  gulp.watch([source + '/css/*.css', source + '/css/compiled/*.css'], ['minify-css'])
  gulp.watch(source + '/js/*.js', ['minify-js'])
  gulp.watch(source + '/html/*.html', ['minify-html'])
})

gulp.task('default', ['watch', 'sass', 'minify-css', 'minify-js', 'minify-html', 'resize-image-projet', 'resize-image-experience'])

gulp.task('server', function (done) {
  http.createServer(
    st({ path: __dirname + '/dist', index: 'index.html', cache: false })
  ).listen(8081, done)
})
