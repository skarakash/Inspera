const gulp = require('gulp');
const { watch, series } = require('gulp');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const react = require('gulp-react');
const sass = require("gulp-sass");


function server(cb) {
    var started = false;
 return nodemon({
  script: 'server.js'
}).on('start', function () {
  if (!started) {
    cb();
    started = true;
  }
});
};

function jsx() {
    return gulp.src('./jsx/**/*.jsx')
       .pipe(plumber())
       .pipe(react())
       .pipe(gulp.dest('./js'));
};

function styles() {
    return gulp.src('./css/**/*.scss')
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest('./css'));
}; 


gulp.task('default', gulp.series([server], (done) => {
	watch('./jsx/**/*.jsx', jsx);
	watch('./css/base.scss', styles);
	done()
}));


exports.jsx = jsx;