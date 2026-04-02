const gulp = require('gulp');
const less = require('gulp-less');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const paths = {
    styles: {
        src: 'src/styles/**/*.less',
        dest: 'dist/styles/',
    },
    scripts: {
        src: [
            'src/scripts/jquery.mask.js',
            'src/scripts/main.js'
        ],
        dest: 'dist/scripts/'
    }
}

function styles() {
    return gulp.src(paths.styles.src)
      .pipe(less())
      .pipe(concatCss("style.min.css"))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src)
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.scripts.dest));
}

function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.default = gulp.parallel(styles, scripts);
exports.watch = watchFiles;
