import gulp from 'gulp'
import browserify from 'browserify'
import path from 'path'
import source from 'vinyl-source-stream'
import watcher from './lib/watcher'
import config from './config'

let vendor = Object.keys(require(path.join(process.cwd(), 'package.json')).dependencies)
function browserifyTask(){
  browserify(config.javascript.path + 'index.js', {
      extensions: ['js', 'jsx'],
      debug: true
    })
    .external(vendor)
    .bundle()
    .on('error', err => {
      console.error(err.message)
    })
    .pipe(source('index.js'))
    .pipe(gulp.dest(config.build.path + config.build.javascriptPath))
}

function vendorTask(){
  browserify()
    .require(vendor)
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest(config.build.path))
}

export default {
  browserify: () => {
    watcher.register('Browserify', config.javascript.path + '**/*' + config.javascript.extension, browserifyTask)
    browserifyTask()
  },
  vendor: () => {
    vendorTask()
  }
}
