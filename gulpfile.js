var gulp = require("gulp");
var less = require("gulp-less");
var csso = require("gulp-csso");
var concat = require("gulp-concat");
var path = require("path");

gulp.task("less",function(){
	return gulp.src("./app/css/**/*.less")
		.pipe(less({
			paths: [path.join(__dirname,'less','includes')]
		}))
		.pipe(csso())
		.pipe(gulp.dest("./public/css"));
})
//定义合并任务
gulp.task("allCss",function(){
	return gulp.src("./public/css/**/*.css")
		.pipe(concat("all.css"))
		.pipe(gulp.dest("./dist/css"));
});
//定义工作流
gulp.task("css",["less","allCss"])