import imagemin from 'gulp-imagemin';
import imagemin_jpg from 'imagemin-jpegtran';
import imagemin_png from 'imagemin-pngquant';

export const image = () => {
    return app.gulp.src(app.path.imageFolder)
        .pipe(imagemin([
            imagemin_jpg({
                quality:[0.7,0.9]
            }),
            imagemin_png({
                quality: [0.7, 0.9]
            })
        ]))
        .pipe(app.gulp.dest(app.path.build.imageFolder));
    }
