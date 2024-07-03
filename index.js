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
    const course = {id: 3, name: "hehe"};
    courses.push(course);
    res.json(course);
});

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