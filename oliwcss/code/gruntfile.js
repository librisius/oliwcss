module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
        options: {
          livereload: true
        },
        customers_less: {
          files: ['less/**/*.less'],
          tasks: ['less:customers_less', 'autoprefixer', 'cssmin']
        },
        customers_js: {
          files: ['js/**/*.js'],
          tasks: ['concat', 'uglify']
        }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          $: true,
          console: true
        }
      },
      '<%= pkg.name %>': {
        src: ['js/js/**/*.js']
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
            src: ['**/*.js', '!**/*.min.js'],
            dest: 'dist/js',
            ext: '.min.js'
          }
        ]
      }
    },

    less: {
      customers_less: {
        files: [
          {
            expand: true,
            cwd: 'less',
            src: '**/all.less',
            dest: 'dist/css',
            ext: '.css'
          }
        ]
      }
    },

    autoprefixer: {
      options : {},
      no_dest: {
        src: ['dist/css/**/*.css', '!dist/css/**/*.min.css'] // globbing is also possible here
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
            src: ['**/*.css', '!**/*.min.css'],
            dest: 'dist/css',
            ext: '.min.css'
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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('css', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('js', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('valid', ['validation']);
};