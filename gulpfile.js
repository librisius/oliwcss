var gulp 			= require('gulp'),

	livereload 		= require('gulp-livereload'),
	sourcemaps 		= require('gulp-sourcemaps'),
	rename 			= require("gulp-rename"),

	less 			= require('gulp-less'),

	autoprefixer 	= require('gulp-autoprefixer'),
	cssnano			= require('gulp-cssnano'),
	uncss 			= require('gulp-uncss'),

	jade 			= require('gulp-jade'),

	uglify 			= require('gulp-uglify');



gulp.task('css', function() {

	css('desktop/code/app/less/**/all.less', 'desktop/code/dist/css/');
});

gulp.task('css_tb', function() {
	
	css('tablet/code/app/less/**/all.less', 'tablet/code/dist/css/');
});

gulp.task('css_mb', function() {
	
	css('mobile/code/app/less/**/all.less', 'mobile/code/dist/css/');
});




gulp.task('html', function() {

	html([
		'desktop/code/app/jade/**/*.jade',
		'!desktop/code/app/jade/includes/**/*.jade' ], 'desktop/code/');
});

gulp.task('html_tb', function() {

	html([
		'tablet/code/app/jade/**/*.jade',
		'!tablet/code/app/jade/includes/**/*.jade' ], 'tablet/code/');
});

gulp.task('html_mb', function() {

	html([
		'mobile/code/app/jade/**/*.jade',
		'!mobile/code/app/jade/includes/**/*.jade' ], 'mobile/code/');
});




gulp.task('js', function() {

	js('desktop/code/app/js/**/*.js', 'desktop/code/dist/js/');
});

gulp.task('js_tb', function() {

	js('tablet/code/app/js/**/*.js', 'tablet/code/dist/js/');
});

gulp.task('js_mb', function() {

	js('mobile/code/app/js/**/*.js', 'mobile/code/dist/js/');
});



gulp.task('watch', function() {

	gulp.watch('desktop/code/app/less/**/*', ['css']);
	gulp.watch('tablet/code/app/less/**/*', ['css_tb']);
	gulp.watch('mobile/code/app/less/**/*', ['css_mb']);

	gulp.watch('desktop/code/app/jade/**/*', ['html']);
	gulp.watch('tablet/code/app/jade/**/*', ['html_tb']);
	gulp.watch('mobile/code/app/jade/**/*', ['html_mb']);

	gulp.watch('desktop/code/app/js/**/*.js', ['js']);
	gulp.watch('tablet/code/app/js/**/*.js', ['js_tb']);
	gulp.watch('mobile/code/app/js/**/*.js', ['js_mb']);
});

gulp.task('default', ['watch']);





function css(from, to) {
	gulp.src(from)

		.pipe (
			sourcemaps.init()
		)

		.pipe (
			less()
		)

		.pipe (
			autoprefixer ({
				browsers: ['> 1%', 'IE 9'],
				cascade: false
			})
		)

		.pipe (
			cssnano({
				zindex: false
			})
		)

		.pipe (
			rename({
				suffix: '.min'
			})
		)

		.pipe (
			sourcemaps.write('./')
		)

		.pipe(
			gulp.dest(to)
		);
}

function html(from, to) {

	gulp.src(from)

		.pipe (
			jade({
				pretty: true
			})
		)

		.pipe(
			gulp.dest(to)
		);
}

function js(from, to) {

	gulp.src(from)

		.pipe (
			uglify()
		)

		.pipe(
			gulp.dest(to)
		);
}