var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('./paths');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });     
});

gulp.task('serve:watch', function() {
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(paths.sourceTemplates, ['copy-app-html']).on('change', browserSync.reload);
    gulp.watch(paths.sourceSass, ['build-app-sass']).on('change', browserSync.reload);
    gulp.watch(paths.sassFiles, ['build-styles-sass']).on('change', browserSync.reload);
    gulp.watch(paths.sourceFiles, ['build-js']).on('change', browserSync.reload);
});