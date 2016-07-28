module.exports = function(grunt) {

    // Load all grunt plugins found in the package.json
    require('load-grunt-tasks')(grunt);

    // grunt config
    grunt.initConfig({

        // Compile sass files
        sass: {
            dest: {
                files: [{
                    'css/style.css': 'css/style.scss',
                }]
            }
        },


        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'index.html'
                    ]
                },
                options: {
                    port: 1234,
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },

        // Watch files
        watch: {
            css: {
                files: [
                    // Including
                    'css/*.scss'
                ],
                tasks: ['sass'], // Compile
                options: {
                    interrupt: false,
                    atBegin: true
                }
            }
        }
    });

    // The dev task will be used during development
    grunt.registerTask('default', ['browserSync', 'watch']);
};
