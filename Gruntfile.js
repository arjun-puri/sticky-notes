module.exports = (grunt) => {
  const sass = require('sass');
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          'src/components/note/note.css': 'src/components/note/note.scss',
        },
      },
    },
    cssmin: {
      target: {
        files: {
          'src/components/note/note.min.css': 'src/components/note/note.css',
        },
      },
    },
    uglify: {
      my_target: {
        files: {
          'src/components/main.min.js': 'src/components/main.js',
        },
      },
    },
  });

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
};
