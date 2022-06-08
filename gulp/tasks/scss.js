import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';

const sass =gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(app.plugins.shorthand())
        .pipe(gcmq())
        .pipe(app.gulp.dest(app.path.build.cssFolder))
        .pipe(app.plugins.browsersync.stream());
}