//https://www.npmjs.com/package/gulp-typescript

var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-source', function () {
    gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('app/src'))    
});

gulp.task('build-tests', function () {
    gulp.src('test/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('app/test'))    
});