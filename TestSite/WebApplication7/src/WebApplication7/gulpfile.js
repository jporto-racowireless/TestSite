var gulp = require('gulp');

var paths = {
  
    libTarget: "./wwwroot/libs/"
};

var libsToMove = [
   './node_modules/es6-shim/es6-shim.min.js',
   './node_modules/systemjs/dist/system-polyfills.js',
   './node_modules/angular2/bundles/angular2-polyfills.js',
   './node_modules/systemjs/dist/system.src.js',
   './node_modules/rxjs/bundles/Rx.js',
   './node_modules/angular2/bundles/angular2.dev.js'
];

gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove).pipe(gulp.dest('./wwwroot/libs/'));
});