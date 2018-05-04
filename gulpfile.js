var gulp = require('gulp');
var server = require('gulp-webserver');

var data = require('./src/js/json/data.json')

gulp.task('default', function() {
    gulp.src('src')
        .pipe(server({
            port: 3000,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url == '/list') {
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})