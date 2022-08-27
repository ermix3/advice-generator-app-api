const { src, dest, watch, series } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const buildHtml = () => {
	return src('./src/*.pug').pipe(pug()).pipe(dest('./dist'));
};

const buildScripts = () => {
	return tsProject.src().pipe(tsProject()).js.pipe(dest('dist/js'));
};

const buildStyles = () => {
	return src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./dist/css'));
};

const buildImages = () => {
	return src('./src/images/*').pipe(dest('./dist/images'));
};

exports.default = () => {
	watch('./src/*.pug', buildHtml);
	watch('./src/scss/*.scss', buildStyles);
	watch('./src/ts/*.ts', buildScripts);
	watch('./src/images/*', { events: 'all' }, buildImages);
};
