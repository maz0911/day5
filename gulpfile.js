const gulp = require("gulp");
const css = require("gulp-clean-css");

const sass = require("gulp-sass");

gulp.task("css", () => {
    return gulp.src("./src/css/*.css")
        .pipe(css())
        .pipe(gulp.dest("./dest/css"))
})
gulp.task("sass", () => {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dest/css"))
})
gulp.task("watch", () => {
    gulp.task("./src/scss/*.scss", gulp.series("sass"));
})
gulp.task("dev", gulp.series("sass", "watch"))