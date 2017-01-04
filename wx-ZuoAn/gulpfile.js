var gulp = require('gulp');

var sass = require('gulp-sass');

var rename = require('gulp-rename');

gulp.task('scss', function () {
gulp.src('./pages/page/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function (path) {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('./pages/page/'));
});

//修改文件后缀名
//gulp.task('raname',function(){
//	gulp.src('./pages/page/*.scss')
//		.pipe(rename(function (path) {
//    path.extname = '.wxss';
//  }))
//		.pipe(gulp.dest('./pages/page/'));
//})

gulp.task('watch', function () {
  gulp.watch('./pages/page/*.scss', ['scss']);
});

gulp.task('default', [/*'raname',*/'watch'], function () {
  console.log('done!');
});
