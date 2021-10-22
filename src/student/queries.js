const getStudents = "SELECT * FROM students";
const getonestudent = "SELECT * FROM students WHERE id = $1";
const checkEmail = "SELECT * FROM students WHERE email = $1";
const addStudent = "INSERT INTO students(id, name, email, age, dob) VALUES ($1, $2, $3, $4, $5)";
const deleteStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports={
    getStudents,
    getonestudent,
    checkEmail,
    addStudent,
    deleteStudent,
    updateStudent
};
