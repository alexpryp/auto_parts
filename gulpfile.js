const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

function styles() {
    return gulp.src('./src/sass/styles.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    overrideBrowserlist: ['> 1%'],
                    cascade: false
                }))
		        .pipe(gulp.dest('./build/css/'));
}

function scripts() {
	return gulp.src('./src/js/script.js')
				.pipe(babel({
		            presets: ['@babel/env']
                }))
                .pipe(uglify())
				.pipe(gulp.dest('./build/js'));
}

function watch() { 
	gulp.watch('./src/sass/**/*.scss', styles);
	gulp.watch('./src/js/**/*.js', scripts);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);