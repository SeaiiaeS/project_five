import gulpPug from 'gulp-pug';

export const pug = () => {
    return gulp.src(path.src.pug)
        .pipe(gulpPug({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.pug))
}