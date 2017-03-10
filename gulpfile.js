/**
 * @file gulp
 * @author Captain
 */
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var fs = require('fs');

var $ = gulpLoadPlugins();
var streams = ['./app/js/index.js',
  './app/js/**/*.js',
  './app/js/**/**/*.js'
];

// 处理css
gulp.task('localCss', function() {
  gulp.src('./app/css/*.css')
  .pipe(gulp.dest('./local/css/'));
});
// 处理images
gulp.task('localImages', function() {
  gulp.src('./app/images/**')
  .pipe(gulp.dest('./local/images/'));
});
// 处理fonts
gulp.task('localFonts', function(){
    gulp.src('./app/fonts/**')
        .pipe(gulp.dest('./local/fonts/'))
});
// 处理index.html
gulp.task('localIndex', function(){
    gulp.src('./index.html')
        .pipe(gulp.dest('./local/'))
});
gulp.task('packLocal', function() {
  gulp.src(streams)
    .pipe($.webpack())
    .pipe($.rename('app.js'))
    .pipe(gulp.dest('./local/js/'));
});

//发布本地
gulp.task('local', $.sequence('localCss', 'localImages', 'localFonts', 'packLocal','localIndex'));
