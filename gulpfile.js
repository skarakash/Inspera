const gulp = require('gulp');
const { watch, series } = require('gulp');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const react = require('gulp-react');
const sass = require("gulp-sass");
const jest = require('gulp-jest').default;



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


function test(){
  return gulp.src('./__tests__').pipe(
    jest({
    "preprocessorIgnorePatterns": ["./node_modules/" ],
    "automock": false
  })
  );
}

gulp.task('default', gulp.series([server], (done) => {
  watch('./jsx/**/*.jsx', gulp.series(jsx, test));
	watch('./css/base.scss', styles);
	done()
}));

exports.test = test;