module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.initConfig({
        uglify: {
          my_target: {
            files: {
                '_/js/script.js':['_/working/js/*.js'] 
            }
          }
        },
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            options: { livereload: true },
            scripts: {
                files: ['_/working/js/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_/working/sass/*.scss'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['_/working/html/*.php'],
                tasks: ['htmlmin']
            }
        },
        htmlmin: {
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '_/working/html',
                    src: '**/*.php',
                    dest: ''
                }]
            }
	}
    }) //initconfig
    grunt.registerTask('default', 'watch');
} // exports