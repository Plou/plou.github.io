const gulp = require('gulp')
const batch = require('gulp-batch')
const watch = require('gulp-watch')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const gutil = require('gulp-util')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-csso')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const browserify = require('browserify')
const babelify = require('babelify')
const es2015 = require('babel-preset-es2015')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()



gulp.task('pug', function(){
  return gulp.src('templates/page/*.pug')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(pug())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream())
})

gulp.task('scss', function(){
  return gulp.src('css/src/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
})

gulp.task('js', () => {
  browserify('./js/src/main.js')
    .transform(babelify.configure({ presets: [es2015] }))
    .bundle()
    .on('error', gutil.log)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream())
})

gulp.task('serve', function() {

    browserSync.init({
        server: "./",
        open: false,
    })

    gulp.watch("css/src/**/*.scss", ['scss'])
    gulp.watch("js/src/**/*.js", ['js'])
    gulp.watch("templates/**/*.pug", ['pug'])
    gulp.watch('img/**/*').on('change', browserSync.reload)
})

gulp.task('default', [ 'build', 'serve' ])
gulp.task('build', [ 'pug', 'scss', 'js' ])
