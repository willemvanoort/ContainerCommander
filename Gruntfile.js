module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js:{
				src:[
					'license/license.js',
					'components/jquery/dist/jquery.min.js',
					'components/bootstrap/dist/js/bootstrap.min.js',
					'dev/js/main.js'
				],
				dest: 'public/build/js/build.js'
			},
			css:{
				src: [
					'license/license.css',
					'components/bootstrap/dist/css/bootstrap.min.css',
					'components/fontawesome/css/font-awesome.min.css',
					'dev/css/main.css'
				],
				dest: 'public/build/css/build.css'
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'components/fontawesome/fonts', src: ['**'], dest: 'public/build/css/fonts'}
				]
			}
		},
		uglify: {
			target:{
				files: {
					'public/build/js/build.min.js': ['public/build/js/build.js']
				}
			}
		},
		cssmin:{
			target: {
				files: [{
					expand: true,
					cwd: 'public/build/css/',
					src: ['*.css', '!*.min.css'],
					dest: 'public/build/css/',
					ext: '.min.css'
				}]
			}
		},
		sass:{
			dist:{
				options:{
					style: 'expanded'
				},
				files:{
					'dev/css/main.css' : 'dev/css/main.scss'
				}
			},
		},
		jshint: {
			all: ['Gruntfile.js', 'dev/js/*.js', 'dev/js/*.*.js']
		},
		shell: {
			strip:{
				command: 'rm -rf node_modules && rm -rf components'
			},
			start:{
				command: 'forever start app.js && echo "Shipyard is live!"'
			},
			stop:{
				command: 'forever stop app.js && echo "Shipyard Stopped"'
			}
		}

	});
	
		
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass', 'concat', 'copy', 'uglify', 'cssmin', 'jshint']);
	grunt.registerTask('build', ['sass', 'concat', 'copy', 'uglify', 'cssmin']);
	grunt.registerTask('strip', ['shell:strip']);
	grunt.registerTask('start', ['shell:start']);
	grunt.registerTask('stop', ['shell:stop']);
	grunt.registerTask('restart', ['shell:stop', 'shell:start']);
};
