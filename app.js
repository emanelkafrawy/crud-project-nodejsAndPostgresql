const express = require("express");

const app = express();
const port = 3000;

const studentRoutes = require("./src/student/routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/students", studentRoutes);

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})