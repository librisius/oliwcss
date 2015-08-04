module.exports = function(grunt) {
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			desktop_less: {
				files: ['desktop/code/less/**/*.less'],
				tasks: ['less:desktop', 'autoprefixer:desktop'],
				options: {
					livereload: true
				}
			},
			tablet_less: {
				files: ['tablet/code/less/**/*.less'],
				tasks: ['less:tablet', 'autoprefixer:tablet'],
				options: {
					livereload: true
				}				
			},
			mobile_less: {
				files: ['mobile/code/less/**/*.less'],
				tasks: ['less:mobile', 'autoprefixer:mobile'],
				options: {
					livereload: true
				}				
			},
			desktop_html: {				
				files: ['desktop/code/**/*.{html,php}'],
				options: {
					livereload: true
				}
			},
			tablet_html: {				
				files: ['tablet/code/**/*.{html,php}'],
				options: {
					livereload: true
				}				
			},
			mobile_html: {				
				files: ['mobile/code/**/*.{html,php}'],
				options: {
					livereload: true
				}				
			},
			desktop_js: {				
				files: ['desktop/code/js/**/*.js'],
				options: {
					livereload: true
				}				
			},
			tablet_js: {				
				files: ['tablet/code/js/**/*.js'],
				options: {
					livereload: true
				}				
			},
			mobile_js: {				
				files: ['mobile/code/js/**/*.js'],
				options: {
					livereload: true
				}				
			}
		},

		concat: {
			dist: {
				src: 'js/**/*.js',
				dest: 'dist/js/all.js'
			}
		},

		uglify: {
			customers_uglify: {
				files: [
					{
						expand: true,
						cwd: 'dist/js',
						src: ['**/*.js'],
						dest: 'dist/js',
						ext: '.min.js'
					}
				]
			}
		},

		less: {
			desktop: {
				files: [
					{
						expand: true,
						cwd: 'desktop/code/less',
						src: '**/all.less',
						dest: 'desktop/code/dist/css',
						ext: '.css'
					}
				]
			},
			tablet: {
				files: [
					{
						expand: true,
						cwd: 'tablet/code/less',
						src: '**/all.less',
						dest: 'tablet/code/dist/css',
						ext: '.css'
					}
				]
			},
			mobile: {
				files: [
					{
						expand: true,
						cwd: 'mobile/code/less',
						src: '**/all.less',
						dest: 'mobile/code/dist/css',
						ext: '.css'
					}
				]
			}
		},

		autoprefixer: {
			desktop: {
				src: ['desktop/code/dist/css/all.css'],
				options : {},
			},
			tablet: {
				src: ['tablet/code/dist/css/all.css'],
				options : {},
			},
			mobile: {
				src: ['mobile/code/dist/css/all.css'],
				options : {},
			}
		},

		cssmin: {
			with_banner: {
				options: {
					banner: '/*cssmin*/'
				},
		 
				files: [
					{
						expand: true,
						cwd: 'dist/css',
						src: ['**/*.css'],
						dest: 'dist/css'
					}
				]
			}
		},

		validation: {
			options: {
				charset: 'utf-8',
				doctype: 'HTML5',
				failHard: true,
				reset: true
			},
			files: {
				src: '*.html'
			}
		}
	});
 
	// Plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-html-validation');

	grunt.registerTask('default', ['less', 'autoprefixer']);
	grunt.registerTask('css', ['less', 'autoprefixer', 'cssmin']);
	grunt.registerTask('js', ['concat', 'uglify']);
	grunt.registerTask('min', ['cssmin', 'uglify']);
	grunt.registerTask('valid', ['validation']);
};