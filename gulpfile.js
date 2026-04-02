const gulp = require('gulp');
const less = require('gulp-less');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const paths = {
    styles: {
        src: 'src/styles/**/*.less',
        dest: 'dist/styles/',
    }
}

exports.default = function () {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(concatCss("style.min.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.styles.dest));
};

exports.watch = function () {
    gulp.watch('src/styles/**/*.less', gulp.series('default'));
};
