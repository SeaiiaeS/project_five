import imagemin from 'imagemin';
import imagemin_jpg from 'imagemin-jpegtran';
import imagemin_png from 'imagemin-pngquant';

export const image = await imagemin(['images/*.{jpg,png}'], {
	destination: app.paths.build.imageFolder,
	plugins: [
		imagemin_jpg(),
		imagemin_png({
			quality: [0.6, 0.8]
		})
	]
});
//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
