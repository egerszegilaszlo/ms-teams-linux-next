const gulp = require('gulp');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const jetpack = require('fs-jetpack');
const bundle = require('./bundle');
const utils = require('./utils');

const projectDir = jetpack;
const srcDir = jetpack.cwd('./src');
const destDir = jetpack.cwd('./app');

gulp.task('bundle', () =>
  Promise.all([
    bundle(srcDir.path('mainApp.js'), destDir.path('mainApp.js')),
    bundle(srcDir.path('preload.js'), destDir.path('preload.js')),
  ])
);

gulp.task('environment', () => {
  const configFile = `config/env_${utils.getEnvName()}.json`;
  projectDir.copy(configFile, destDir.path('env.json'), {
    overwrite: true,
  });
});

gulp.task('watch', () => {
  const beepOnError = function(done) {
    return function(err) {
      if (err) {
        utils.beepSound();
      }
      done(err);
    };
  };

  watch(
    'src/**/*.js',
    batch((events, done) => {
      gulp.start('bundle', beepOnError(done));
    })
  );
});

gulp.task('build', ['bundle', 'environment']);
