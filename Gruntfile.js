module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),

		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [
				{
					expand: true,
					cwd: 'img/', // cwd is 'current working directory'
					src: ['**/*.png'],
					dest: 'img/', // Could also match cwd.
					ext: '.png'
				}
				]
			},
			jpg: {
				options: {
					progressive: true
				},
				files: [
				{
					expand: true, // Tell Grunt where to find our images and where to export them to.
					cwd: 'img/', // cwd is 'current working directory'
					src: ['**/*.jpg'],
					dest: 'img/', // Could also match cwd.
					ext: '.jpg'
				}
				]
			}
		},
		
		less: {
            compile: {
                options: {
                    compress: true,
                    cleancss: true,
                    optimization: 2
                },
                files: {
                	// target.css file: source.less file
                    'css/style.css': 'css/style.less'
                }
            }
        },

        watch: {
        	images: {
        		options: {
                    spawn: false,
                    event: ['added', 'deleted', 'changed']
                },
        		files: ['images/*.{png,jpg,gif}'],
        		tasks: ['imagemin']
        	},
            styles: {
               options: {
                    spawn: false,
                    event: ['added', 'deleted', 'changed']
                },
                files: ['css/*.less'],
                tasks: ['less']
            }
        }
		
		// cssmin: {
		// 	minify: {
		// 		expand: true,
		// 		cwd: 'assets/css/',
		// 		src: ['*.css', '!*.min.css'],
		// 		dest: 'assets/css/',
		// 		ext: '.min.css'
		// 	}
		// }
	});


  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

};