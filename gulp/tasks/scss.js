import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';

const sass =gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(app.gulp.dest(app.path.build.cssFolder))
}