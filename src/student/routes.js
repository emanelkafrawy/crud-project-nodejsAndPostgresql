const {Router} = require("express");
const studentscontroller = require("./controller");

const router = Router();

router.get('/', studentscontroller.getStudents)

router.get('/:id', studentscontroller.getOneStudent)

router.post('/', studentscontroller.createStudent)

router.delete('/:id', studentscontroller.deleteStudent)

router.put('/:id', studentscontroller.updateStudent)


module.exports = router;