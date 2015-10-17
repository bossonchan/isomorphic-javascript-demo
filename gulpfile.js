var gulp = require("gulp");

var browserify = require("browserify");
var shim       = require("browserify-shim")
var source     = require("vinyl-source-stream");
var buffer     = require("vinyl-buffer");
var reactify   = require("gulp-react");
var clean      = require("gulp-clean");

gulp.task("clean", function() {
  return gulp.src("./public/js/*").pipe(clean());
});

gulp.task("jsx", ["clean"], function() {
  return gulp
           .src("./views/*.jsx")
           .pipe(reactify())
           .pipe(gulp.dest("./public/js/"));
});

gulp.task("browserify", ["jsx"], function() {
  var filename = "app.js";
  var b = browserify("./public/js/" + filename);
  b.transform(shim);
  return b.bundle()
          .pipe(source(filename))
          .pipe(buffer())
          .pipe(gulp.dest("./public/js/"));
});

gulp.task("default", ["clean", "jsx", "browserify"]);
