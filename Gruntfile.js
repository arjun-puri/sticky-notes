module.exports = (grunt) => {
  const sass = require('sass');
  require('load-grunt-tasks')(grunt);

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
  });

  grunt.registerTask('default', ['sass']);
};
