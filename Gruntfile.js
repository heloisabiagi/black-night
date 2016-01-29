/*global module:false*/
module.exports = function(grunt) {

  // SASS settings
  var SASSconfigs = {
      "default": {
        "sassDir": "source/sass",
        "cssDir": "assets/style",
        "imagesDir": "assets/images",
        "imagesPath": "source/images",
        "generatedImagesDir": "assets/images",
        "javascriptsDir": "assets/js",
        "fontsDir": "assets/fonts",
        "httpImagesPath": "../images",
        "httpGeneratedImagesPath": "../images",
        "require": [
          "compass-normalize"
        ],
        "force": true,
        "noLineComments": true
      }
    }

  // Settings
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Concatenate JS files
     concat: {
      scripts: {
        src:  "source/js/components/*",
        dest: "assets/js/scripts.js"
        },
      vendors: {
        src: "source/js/vendors/*",
        dest: "assets/js/vendors.js"
      }         	
    },

    // Uglify JS files
	   uglify: {
      scripts: {
        src: "<%= concat.scripts.dest %>",
        dest: "assets/js/scripts.min.js"
        },
      vendors: {
        src: "<%= concat.vendors.dest %>",
        dest: "assets/js/vendors.min.js"
      }      

    },

    // Processes CSS files
    compass: {
      default: {
        options: SASSconfigs.default
      }
    },

    // Minifies CSS Files
    cssmin: {
      home: {
        expand: true,
        cwd: SASSconfigs.default.cssDir,
        src: ["*.css", "!*.min.css"],
        dest: SASSconfigs.default.cssDir,
        ext: ".min.css"
      }
    },

    copy: {      
      settings: {
        files: [
        {expand: true, flatten: true, src: ['source/js/settings.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/js/color-switcher.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/js/modernizr.custom.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/js/user-customs.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/inc/mailer.php'], dest: 'assets/inc'}
        ]
      },
      images: {
        files: [{expand: true, cwd: 'source/images', src: ['**'], dest: 'assets/images/'}]
      },
      fonts: {
        files: [{expand: true, cwd: 'source/fonts', src: ['**'], dest: 'assets/fonts'}]
      }
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
  grunt.registerTask("build", ["copy", "concat", "uglify", "compass", "cssmin"]);
  grunt.registerTask("devScriptsJs", ["copy:settings", "concat:scripts", "uglify:scripts"]);
  grunt.registerTask("devVendorsJs", ["copy:settings","concat:vendors", "uglify:vendors"]);
  grunt.registerTask("devCSS", ["copy:images", "copy:fonts" ,"compass", "cssmin"]);
};
