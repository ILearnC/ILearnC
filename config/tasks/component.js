import gulp from 'gulp'
import browserify from 'browserify'
import reactify from 'reactify'
import source from 'vinyl-source-stream'
import watcher from './lib/watcher'
import config from './config'

export default () => {
  let path = config.component.path

  function run() {
    browserify(path + '/ILearn.jsx')
      .transform(reactify)
      .bundle()
      .pipe(source('ilearn.js'))
      .pipe(
        gulp.dest(config.build.path + config.build.componentPath)
      )
  }

  watcher.register('Component', path, run)
  return run()
}
