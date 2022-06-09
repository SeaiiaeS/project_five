import * as nodePath from 'path';
const rootFolder =nodePath.basename(nodePath.resolve())

const buildFolder= './build';
const srcFolder= './src';
const imageFolder = `${srcFolder}/image/**`


export const path = {
	build: {
        files: `${buildFolder}/`,
        cssFolder:`${buildFolder}/css`,
        imageFolder:`${buildFolder}/image`,
        html:`${buildFolder}/index.html`,
        fonts:`${buildFolder}/fonts`,
    },
	src: {
        pug: `${srcFolder}/index.pug`,
        scss: `${srcFolder}/index.scss`,
    },
	watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/**/*.scss`,
    },
    fonts:{
        src: `${srcFolder}/fonts/**/*.{ttf,woff,woff2,eot,svg}`,
    },
	clean: buildFolder,
	buildFolder: buildFolder,
    imageFolder:imageFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder
}