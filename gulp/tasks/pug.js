import gulpPug from 'gulp-pug';

export const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber({
            errorHandler: app.plugins.notify.onError((err) => {
                return{
                title: 'PUG',
                message: `${err.message} Error: <%= error.message %>`
            }})
        }))
        .pipe(gulpPug({
            pretty: true
        }))
        
        .pipe(app.gulp.dest(app.path.build.files))
}