import gulp from 'gulp'
import watcher from './lib/watcher'
import config from './config'

export default () => {
  let path = config.image.path + '**/*'

  function run(){
    gulp.src(path)
      .pipe(gulp.dest(config.build.path + config.build.imagePath))
  }

  watcher.register('Image', path, run)
  return run()
}
