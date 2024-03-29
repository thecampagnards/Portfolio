// Requis
var gulp = require('gulp')
var minify = require('gulp-minify')
var cleanCSS = require('gulp-clean-css')
var watch = require('gulp-watch')
var concat = require('gulp-concat')
var htmlmin = require('gulp-htmlmin')
var sass = require('gulp-sass')(require('sass'))
var connect = require('gulp-connect')
var livereload = require('gulp-livereload')
var http = require('http')
var st = require('st')
var uglify = require('gulp-uglify')
var imageResize = require('gulp-image-resize')
var jp2 = require('gulp-jpeg-2000')
var webp = require('gulp-webp')

var source = './src' // dossier de travail
var destination = './dist' // dossier à livrer

gulp.task('sass', function () {
  return gulp.src(source + '/sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(gulp.dest(source + '/css/compiled'))
})

gulp.task('minify-css', gulp.series('sass', function () {
  // ordre de preference dans un tableau
  return gulp.src([source + '/css/*.css', source + '/css/compiled/*.css'])
    .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(destination))
    .pipe(livereload())
}))

gulp.task('resize-image-projet', function () {
  return gulp.src(source + '/img/projets/*.{png,jpg}')
    .pipe(imageResize({
      width: 480
    }))
    //.pipe(webp())
    //.pipe(jp2())
    .pipe(gulp.dest(destination + '/img/projets/'))
})

gulp.task('resize-image-experience', function () {
  return gulp.src(source + '/img/experiences/*.{png,jpg}')
    .pipe(imageResize({
      height: 250
    }))
    //.pipe(webp())
    //.pipe(jp2())
    .pipe(gulp.dest(destination + '/img/experiences/'))
})

gulp.task('resize-image-sport', function () {
  return gulp.src(source + '/img/sport/*.{png,jpg}')
    .pipe(imageResize({
      width: 480
    }))
    //.pipe(webp())
    //.pipe(jp2())
    .pipe(gulp.dest(destination + '/img/sport/'))
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

gulp.task('server', function (done) {
  http.createServer(
    st({ path: __dirname + '/dist', index: 'index.html', cache: false })
  ).listen(8081, done)
})

gulp.task('watch', gulp.parallel('server', function () {
  livereload.listen({ basePath: 'dist' })
  gulp.watch(source + '/sass/*.sass', gulp.series('sass'))
  gulp.watch([source + '/css/*.css', source + '/css/compiled/*.css'], gulp.series('minify-css'))
  gulp.watch(source + '/js/*.js', gulp.series('minify-js'))
  gulp.watch(source + '/html/*.html', gulp.series('minify-html'))
}))

gulp.task('default', gulp.parallel('sass', 'minify-css', 'minify-js', 'minify-html', 'resize-image-projet', 'resize-image-experience', 'resize-image-sport'))