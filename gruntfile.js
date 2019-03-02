module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['css/*.less'],
                dest: 'dist/style.main.less',
            },
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/style.main.css": "dist/style.main.less"
                }
            }
        },


        uglify: {
            my_target: {
                files: {
                    'minFiles/script.min.js': ['js/script.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['css/*.less', 'js/script.js'],
                tasks: ['concat', 'less', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['concat', 'less', 'uglify', 'watch']);

};