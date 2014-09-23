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
		jshint: {
			all: ['Gruntfile.js', 'dev/js/*.js', 'dev/js/*.*.js']
		}

	});
	
		
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['concat', 'copy', 'jshint']);
	grunt.registerTask('build', ['concat', 'copy']);
	grunt.registerTask('strip', ['shell']);
};
