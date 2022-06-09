export const copyFonts = () => {
    return app.gulp.src(app.paths.fonts.src)
        .pipe(app.gulp.dest(app.paths.build.fonts));
    }