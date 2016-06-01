'use strict'

var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('./paths');

function buildSource(forBrowser) {
    var targetModule = forBrowser ? 'system' : 'commonjs';
    gulp.src(paths.sourceFiles)
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: targetModule,
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.sourceDestPath))        
}

gulp.task('build-source', ['clean-app'], function () {
    buildSource(true);
});

gulp.task('build-test', ['clean-app'], function () {
    buildSource(false);
    gulp.src(paths.testFiles)
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.testDestPath))    
});

gulp.task('build-all-ts', ['build-source', 'build-test']);
