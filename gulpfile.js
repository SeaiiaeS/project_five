import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
	path: path,
	gulp: gulp,
    plugins:plugins
}

import { pug } from './gulp/tasks/pug.js';
const defaultGulpFunction =gulp.series(
    
)

gulp.task('default',defaultGulpFunction)