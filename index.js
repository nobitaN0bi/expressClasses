const express = require('express');
const app = express();
const port = 3000;

let courses = [
    { id: 1, name:"Java"},
    { id: 2, name:"Kuch bhi"}
];

app.use(express.json()); // This is needed to parse JSON body in POST requests

app.get('/courses', (req, res) => {
    console.log('done');
    res.json(courses); 
});

app.post('/courses', (req, res) => {
    console.log(req.body);
    let singleCourse = {
        id: courses.length + 1,
        name: req.body.name // Assuming the request body has a 'name' property
    }
    courses.push(singleCourse);
    res.json(singleCourse);
});

app.delete('/courses/delete/:id', (req, res) => {
    // Find the course with the given id
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    // Delete the course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the deleted course
    res.json(course);
});
function middleware(req, res, next) {
    console.log("called");
    next();
}

//logger for method,ip,hostname,date
function logger(req, res, next) {
    console.log("ip:", req.ip);
    console.log("method:", req.method); 
    console.log("hostname:", req.hostname);
    console.log("date:", new Date()); 
    next(); 
}



app.put('/courses/:id', (req, res) => {
    // Find the course with id 1
    let course = courses.find(c => c.id === 1);
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    // Update the course and return it
    course.name = "springBoot";
    res.json(course);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});