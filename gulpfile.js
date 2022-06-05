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
import { server } from './gulp/tasks/server.js';
import { image } from './gulp/tasks/image.js';

const watch = () => {
    gulp.watch(path.watch.pug, pug);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.image, image);
}

const defaultGulpFunction =gulp.series(
    clean,
    gulp.series(pug,scss,image),
    gulp.parallel(server,watch)
)

gulp.task('default',defaultGulpFunction)