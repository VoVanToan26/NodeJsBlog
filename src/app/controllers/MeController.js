const Course = require('./models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GEt] storedCourse
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);;

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // Course.find({})
        //     .then((courses) =>
        //         res.render('me/stored-courses', {
        //             courses: multipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);
    }
    // [GEt] me/trash/course
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
