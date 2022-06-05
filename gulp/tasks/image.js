
export const image = () => {
    return app.gulp.src(app.path.imageFolder)
        .pipe(app.gulp.dest(app.path.build.imageFolder))
        .pipe(app.plugins.browsersync.stream());
    }