var gulp  = require('gulp');
var sass  = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src([
        'sass/app.scss',
        'sass/bootstrap.scss'
    ])
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', function () {
    gulp.start([
        'sass'
    ]);
    gulp.start('watch');
});