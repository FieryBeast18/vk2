const gulp = require('gulp')
const plumber = require('gulp-plumber')

module.exports = function pug2html() {
  return gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('build'))
}

