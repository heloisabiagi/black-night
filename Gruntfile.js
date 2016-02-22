/*global module:false*/
module.exports = function(grunt) {

  // SASS settings
  var SASSconfigs = {
      "default": {
        "sassDir": "source/sass",
        "cssDir": "assets/style",
        "imagesDir": "assets/images",
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
      jsLibs: {
        src: ["source/js-libs/*", "!source/js-libs/modernizr.custom.js"],
        dest: "assets/js/libs.js"
      },
      cssLibs: {
        src: ["source/css-libs/*", "source/css-libs/owl/*.css"],
        dest: "assets/style/libs.css"
      }          	
    },

    // Uglify JS files
	   uglify: {
      scripts: {
        src: "<%= concat.scripts.dest %>",
        dest: "assets/js/scripts.min.js"
        },
      jsLibs: {
        src: "<%= concat.jsLibs.dest %>",
        dest: "assets/js/libs.min.js"
      }      

    },

    // Processes CSS files
    compass: {
      default: {
        options: SASSconfigs.default
      }
    },

    // Combine Media Queries
    cmq: {
      your_target: {
        files: {
          'assets/style': ["assets/style/style-*.css", "!assets/style/*.min.css"]
        }
      }
    },

    // Minifies CSS Files
    cssmin: {
      main: {
        expand: true,
        cwd: SASSconfigs.default.cssDir,
        src: ["*.css", "!*.min.css", "!libs.css"],
        dest: SASSconfigs.default.cssDir,
        ext: ".min.css"
      },
      libs: {
        expand: true,
        cwd: "assets/style",
        src: ["libs.css"],
        dest: "assets/style",
        ext: ".min.css"
      }
    },

    copy: {      
      settings: {
        files: [
        {expand: true, flatten: true, src: ['source/js/settings.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/js/color-switcher.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/js-libs/modernizr.custom.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/js/documentation.js'], dest: 'assets/js'},
        {expand: true, flatten: true, src: ['source/inc/*'], dest: 'assets/inc'}
        ]
      },
      images: {
        files: [{expand: true, cwd: 'source/images', src: ['**'], dest: 'assets/images/'}]
      },
      fonts: {
        files: [{expand: true, cwd: 'source/fonts', src: ['**'], dest: 'assets/fonts'}]
      }
    },

    // Watch for changes in the development directories and process them into the final assets folder
    watch: {
      devJs: {
        files: ['source/js/**'],
        tasks: ['copy:settings', 'concat:scripts', 'uglify:scripts'],
        options: {
          spawn: false,
        }
      },
      devJsLibs: {
        files: ['source/js-libs/**'],
        tasks: ['copy:settings','concat:jsLibs', 'uglify:jsLibs'],
        options: {
          spawn: false,
        }
      },
      devCSS: {
        files: ['source/sass/**'],
        tasks: ['copy:images', 'copy:fonts' ,'compass', 'cmq', 'cssmin:main'],
        options: {
          spawn: false,
        }
      },

      devCSSLibs: {
        files: ['source/css-libs/**'],
        tasks: ['concat:cssLibs', 'cssmin:libs'],
        options: {
          spawn: false,
        },
      },
      phpForm: {
        files: ['source/inc/**'],
        tasks: ['copy:settings'],
        options: {
          spawn: false,
        },
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
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Define tasks
  grunt.registerTask("build", ["copy", "concat", "uglify", "compass", "cssmin"]);
  grunt.registerTask("devJs", ["copy:settings", "concat:scripts", "uglify:scripts"]);
  grunt.registerTask("devJsLibs", ["copy:settings","concat:jsLibs", "uglify:jsLibs"]);
  grunt.registerTask("devCSS", ["copy:images", "copy:fonts" ,"compass", "cmq", "cssmin:main"]);
  grunt.registerTask("devCSSLibs", ["concat:cssLibs", "cssmin:libs"]);
};
