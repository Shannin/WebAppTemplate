'use strict'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    src: ['*.scss'],
                    dest: './www/assets/css/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            options : {
                livereload: true
            },
            sass: {
                files: ['./*.sass', '*/*.sass', '*/*/*.sass', '*/*/*/*.sass'],
                tasks: ['sass']
            },
            html: {
                files: ['./*.html', '*/*.html', '*/*/*.html', '*/*/*/*.html'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['./*.js', '*/*.js', '*/*/*.js', '*/*/*/*.js'],
                options: {
                    livereload: true
                }
            }
        }
    });


    grunt.registerTask('build', [
        'sass',
        'cssmin',
        'watch'
    ]);

    grunt.registerTask('default', ['build']);

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
}