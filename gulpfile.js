const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile SCSS into CSS
function style() {
    // 1. Find scss file
    return gulp.src('./scss/**/*.scss')
    // 2. Compile throug sass compiler
        .pipe(sass().on('error', sass.logError))
    // 3. Where to save the CSS
        .pipe(gulp.dest('./css'))
    // 4. Stream changes to all browsers
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js', style).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;