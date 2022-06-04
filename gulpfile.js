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
const defaultGulpFunction =gulp.series(
    clean,
    gulp.series(pug)
)

gulp.task('default',defaultGulpFunction)