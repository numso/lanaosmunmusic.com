/* jshint node:true */
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      app: {
        expand: true,
        cwd: 'client/js',
        src: ['**/*.js', '!lib/**']
      }
    },

    clean: {
      build: 'build',
      generated: 'build/generated'
    },

    copy: {
      img: {
        expand: true,
        cwd: 'client/img',
        src: ['**'],
        dest: 'build/img'
      },
      fonts: {
        expand: true,
        cwd: 'client/fonts',
        src: ['**'],
        dest: 'build/fonts'
      }
    },

    stylus: {
      options: {
        compress: false
      },
      compile: {
        expand: true,
        cwd: 'client/css',
        src: ['app.styl'],
        dest: 'build/generated/css',
        ext: '.css'
      }
    },

    concat: {
      css: {
        src: [
          'client/css/lib/**/*.css',
          'build/generated/css/**/*.css'
        ],
        dest: 'build/generated/css/<%= pkg.name %>.css'
      }
    },

    htmlrefs: {
      build: {
        src: 'client/*.html',
        dest: 'build/',
        options: {
          appName: '<%= pkg.name %>',
          appVersion: '<%= pkg.version %>'
        }
      }
    },

    htmlmin: {
      index: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/index.html': 'build/index.html'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */'
      },
      app: {
        src: ['build/generated/css/<%= pkg.name %>.css'],
        dest: 'build/css/<%= pkg.name %>.min.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-htmlrefs');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('hint', ['jshint']);
  grunt.registerTask('test', []);
  grunt.registerTask('build', [
    'clean:build',
    'copy:img',
    'copy:fonts',
    'stylus',
    'concat',
    'uglify',
    'htmlrefs',
    'htmlmin',
    'cssmin',
    'clean:generated'
  ]);
};
