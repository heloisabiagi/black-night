/*global module:false*/
module.exports = function(grunt) {
  var config = grunt.file.readJSON("config/settings.json");

  // Settings
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Concatenate JS files
     concat: {
      scripts: {
        src:  config.concat.scripts,
        dest: "build/js/scripts.js"
        },
      vendor: {
        src: "src/js/vendor/*",
        dest: "build/js/vendor.js"
      },  
      cssLibs: {
        src: "src/libs/*.css",
        dest: "build/libs/libs.min.css"
        }           	
    },

    // Uglify JS files
	   uglify: {
      scripts: {
        src: "<%= concat.scripts.dest %>",
        dest: "build/js/scripts.min.js"
        },
      vendor: {
        src: "<%= concat.vendor.dest %>",
        dest: "build/js/vendor.min.js"
      }      

    },

    // Processes CSS files
    compass: {
      default: {
        options: config.sass.default
      }
    },

    // Minifies CSS Files
    cssmin: {
      home: {
        expand: true,
        cwd: config.sass.default.cssDir,
        src: ["*.css", "!*.min.css"],
        dest: config.sass.default.cssDir,
        ext: ".min.css"
      }
    },

    copy: {
      /*
      libs: {
        files: [{expand: true, flatten: true, src: ['<%= concat.cssLibs.dest %>'], dest: 'build/libs'}]
      },*/
      images: {
        files: [{expand: true, flatten: true, src: ['src/images/*'], dest: 'build/images'}]
      },
    }

  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-rename');

  // Define tasks
  grunt.registerTask("default", ["concat", "uglify", "compass", "concat:cssLibs", "copy:images"]);
};
