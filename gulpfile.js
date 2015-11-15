var gulp 			= require('gulp'),

	livereload 		= require('gulp-livereload'),
	connect 		= require('gulp-connect'),
	sourcemaps 		= require('gulp-sourcemaps'),
	rename 			= require("gulp-rename"),

	less 			= require('gulp-less'),

	autoprefixer 	= require('gulp-autoprefixer'),
	nano			= require('gulp-cssnano'),
	uncss 			= require('gulp-uncss'),

	jade 			= require('gulp-jade'),

	uglify 			= require('gulp-uglify');



gulp.task('connect', function() {

	connect.server ({
		root: 'desktop/code/dist/',
		livereload: true
	});
});



gulp.task('css', function() {
	
	gulp.src('desktop/code/app/less/**/all.less')

		.pipe (
			sourcemaps.init()
		)

		.pipe (
			less ()
		)

		.pipe (
			autoprefixer ({
				browsers: ['> 1%', 'IE 9'],
				cascade: false
			})
		)

		.pipe (
			nano()
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
			gulp.dest('desktop/code/dist/css/')
		)

		.pipe(
			connect.reload()
		);
});



gulp.task('css_tb', function() {
	
	gulp.src('tablet/code/app/less/**/all.less')

		.pipe (
			sourcemaps.init()
		)

		.pipe (
			less ()
		)

		.pipe (
			autoprefixer ({
				browsers: ['> 1%', 'IE 9'],
				cascade: false
			})
		)

		.pipe (
			nano()
		)

		.pipe (
			sourcemaps.write('./')
		)

		.pipe(
			gulp.dest('tablet/code/dist/css/')
		)

		.pipe(
			connect.reload()
		);
});



gulp.task('css_mb', function() {
	
	gulp.src('mobile/code/app/less/**/all.less')

		.pipe (
			sourcemaps.init()
		)

		.pipe (
			less ()
		)

		.pipe (
			autoprefixer ({
				browsers: ['> 1%', 'IE 9'],
				cascade: false
			})
		)

		.pipe (
			nano()
		)

		.pipe (
			sourcemaps.write('./')
		)

		.pipe(
			gulp.dest('mobile/code/dist/css/')
		)

		.pipe(
			connect.reload()
		);
});



gulp.task('html', function() {

	gulp.src([
		'desktop/code/app/jade/**/*.jade',
		'!desktop/code/app/jade/includes/**/*.jade' ])

		.pipe (
			jade({
				pretty: true
			})
		)

		.pipe(
			gulp.dest('desktop/code/')
		)

		.pipe(
			connect.reload()
		);
});

gulp.task('html_tb', function() {

	gulp.src([
		'tablet/code/app/jade/**/*.jade',
		'!tablet/code/app/jade/includes/**/*.jade' ])

		.pipe (
			jade({
				pretty: true
			})
		)

		.pipe(
			gulp.dest('tablet/code/')
		)

		.pipe(
			connect.reload()
		);
});

gulp.task('html_mb', function() {

	gulp.src([
		'mobile/code/app/jade/**/*.jade',
		'!mobile/code/app/jade/includes/**/*.jade' ])

		.pipe (
			jade({
				pretty: true
			})
		)

		.pipe(
			gulp.dest('mobile/code/')
		)

		.pipe(
			connect.reload()
		);
});



gulp.task('js', function() {

	gulp.src('desktop/code/app/js/specific/**/*.jade')

		.pipe (
			uglify()
		)

		.pipe(
			gulp.dest('desktop/code/dist/js/specific/')
		)

		.pipe(
			connect.reload()
		);
});

gulp.task('js_tb', function() {

	gulp.src('tablet/code/app/js/specific/**/*.jade')

		.pipe (
			uglify()
		)

		.pipe(
			gulp.dest('tablet/code/dist/js/specific/')
		)

		.pipe(
			connect.reload()
		);
});

gulp.task('js_mb', function() {

	gulp.src('mobile/code/app/js/specific/**/*.jade')

		.pipe (
			uglify()
		)

		.pipe(
			gulp.dest('mobile/code/dist/js/specific/')
		)

		.pipe(
			connect.reload()
		);
});



gulp.task('default', function () {
	return gulp.src('site.css')
		.pipe(
			uncss({
				html: ['*.html']
			})
		)
		.pipe(
			gulp.dest('./out')
		);
});



gulp.task('watch', function() {

	gulp.watch('desktop/code/app/less/**/*.less', ['css']);
	gulp.watch('tablet/code/app/less/**/*.less', ['css_tb']);
	gulp.watch('mobile/code/app/less/**/*.less', ['css_mb']);

	gulp.watch('desktop/code/app/**/*.jade', ['html']);
	gulp.watch('tablet/code/app/**/*.jade', ['html_tb']);
	gulp.watch('mobile/code/app/**/*.jade', ['html_mb']);

	gulp.watch('desktop/code/app/js/specific/**/*.js', ['js']);
	gulp.watch('tablet/code/app/js/specific/**/*.js', ['js_tb']);
	gulp.watch('mobile/code/app/js/specific/**/*.js', ['js_mb']);
});

gulp.task('default', ['connect', 'watch']);