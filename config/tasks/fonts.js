import gulp from 'gulp'
import watcher from './lib/watcher'
import config from './config'

export default () => {
    let path = config.fonts.path + '**/*'

    function run() {
        gulp.src(path)
            .pipe(gulp.dest(config.build.path + config.build.fontsPath))
    }

    watcher.register('Font', path, run)
    return run()
}
