var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: "./client/dist/"
    },
    notify: false
  });
  gulp.watch('client/dist/index.html').on("change", reload);
});
