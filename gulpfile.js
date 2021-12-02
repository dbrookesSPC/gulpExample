

const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

function copy() {
  return src('src/*.js')
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('dist'));

}

exports.default = copy;