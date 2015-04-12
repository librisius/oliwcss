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

    // concat: {

    //   options: {
    //     stripBanners: true,
    //     banner: '/*<%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today["yyyy-mm-dd"] %>*/\n'
    //   },

    //   dist: {
    //     src: [],
    //     dest: 'dest/**.js'
    //   }
    // },

    // ulglify: {
    //   build: {
    //     src: 'js/**/*.js',
    //     dest: 'js/**/*min.js'
    //   }
    // }

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
        src: 'dist/css/**/*.css' // globbing is also possible here
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

  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('css', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('js', ['jshint']);
  grunt.registerTask('valid', ['validation']);
};