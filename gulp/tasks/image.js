import imagemin from "gulp-imagemin";
export const image=()=>{
    return app.gulp.src(app.path.imageFolder)
        .pipe(imagemin({
            progressive: true,
        }))
        .pipe(app.gulp.dest(app.path.build.imageFolder));
}