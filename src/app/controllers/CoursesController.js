const Course = require("./models/Course");
const { mongooseToOject } = require("../../util/mongoose");
class CoursesController {
    // [GEt] .courses/:slug
    show(req, res, next) {
        // require.query.name   querry whrerget method
        // require.body.name;   body where post method
        // req.params.slug;   when use params
        console.log(req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToOject(course),
                });
            })
            .catch(next);
    }

    //GET.courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //POST courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save() //save done
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => {});
    }

    //GET.courses/edit:id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToOject(course),
                });
                // console.log("course", course);
            })
            .catch(next);
    }
    //PUT.courses/update/:id
    update(req, res, next) {
        // res.json(req.body);
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //DELETE.courses/create/id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back')) // go to back
            .catch(next);
    }
    //DELETE.courses/forceDelete/id
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back')) // go to back
            .catch(next);
    }

    //PATCH.courses/restore/id
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back')) // go to back
            .catch(next);
    }
}

module.exports = new CoursesController();
