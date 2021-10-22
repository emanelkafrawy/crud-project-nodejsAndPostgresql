const Pool = require("../../db");
const Queries = require("./queries");

exports.getStudents = async (req, res, next)=>{
    try{
        // res.send("hi get")
        await Pool.query(Queries.getStudents, (err, result)=>{
            if(err) throw err;
            res.status(200).json({
                message: "get all students",
                students: result.rows
            });
        })
    }
    catch(err){
    
        err.statusCode = 500;
        throw err;
        console.log(err);
    }
}

exports.getOneStudent = async (req, res, next)=>{
    try{
        const id = parseInt(req.params.id)
        await Pool.query(Queries.getonestudent,[id], (err, result)=>{
            if(err) throw err;
            res.status(200).json({
                message: "student data",
                students: result.rows
            });
        })
    }
    catch(err){
    
        err.statusCode = 500;
        throw err;
        console.log(err);
    }
}

exports.createStudent = async(req, res, next)=>{
    try{
        const {id, name, email, age, dob} = req.body;

        //check if email exist in db or not 
        await Pool.query(Queries.checkEmail, [email], (err, results)=>{
            if(results.rows.length){
                return res.send("email exist")
            }else{
                // res.send("hi")
                Pool.query(Queries.addStudent,[id, name, email, age, dob], (err, result)=>{
                    if(err) throw err;
                    res.status(200).json({
                        message: "add student"
                    });
                })
            }
        });
    }
    catch(err){
    
        err.statusCode = 500;
        throw err;
        console.log(err);
    }
}

exports.deleteStudent = async (req, res, next)=>{
    try{
        const id = parseInt(req.params.id)
        await Pool.query(Queries.getonestudent,[id], (err, result)=>{
            const nostudent = !result.rows.length ? res.send("no student found"):
                 Pool.query(Queries.deleteStudent, [id], (err, result)=>{
                    if(err) throw err;
                    res.status(200).json({
                        message: "deleted successfully",
                    });
                })
            
        })
    }
    catch(err){
    
        err.statusCode = 500;
        throw err;
        console.log(err);
    }
}

exports.updateStudent = async (req, res, next)=>{
    try{
        const id = parseInt(req.params.id);
        const {name} = req.body;
        await Pool.query(Queries.getonestudent,[id], (err, result)=>{
            const nostudent = !result.rows.length ? res.send("no student found"):
                Pool.query(Queries.updateStudent, [name, id], (err, result)=>{
                    if(err) throw err;
                    res.status(200).json({
                        message: "updated successfully",
                    });
                })
            
        })
    }
    catch(err){
    
        err.statusCode = 500;
        throw err;
        console.log(err);
    }
}
