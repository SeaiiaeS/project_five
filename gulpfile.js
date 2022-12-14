import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
	path: path,
	gulp: gulp,
    plugins:plugins
}

import { clean } from './gulp/tasks/clean.js';
import { pug } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { image } from './gulp/tasks/image.js';
import { server } from './gulp/tasks/server.js';
import { copyFonts } from './gulp/tasks/fonts.js';

const watch = () => {
    gulp.watch(path.watch.pug, pug);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.image, image);
    gulp.watch(path.src.fonts, copyFonts);
}

const defaultGulpFunction =gulp.series(
    clean,
    gulp.series(pug,scss,image,copyFonts),
    gulp.parallel(server,watch)
)
const buildf =gulp.series(
    clean,
    gulp.series(pug,scss,image,copyFonts),
)

gulp.task('default',defaultGulpFunction)
gulp.task('build',buildf)