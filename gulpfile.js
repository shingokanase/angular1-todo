// ライブラリの読み込み
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const del = require('del');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config.js');

// jsとcssの削除
gulp.task('clean', () => {
  del(['./assets/js/**/*']);
});

// TypeScriptのコンパイルとwebpackの実行
gulp.task('webpack', () => {
  gulp.src(['./src/*'])
  .pipe(plumber())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('./assets/js'));
});

// tsとsassの監視
gulp.task('watch', () => {
  gulp.watch('./src/**/*.ts', ['webpack']);
});

// デフォルトタスク
gulp.task('default', () => {
  runSequence('clean', 'webpack', 'watch');
});