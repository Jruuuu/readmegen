//bring in the necessary assets


const inquirer  = require("inquirer");
const util = require('util');


const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
{
    type: "input",
        name: "github",
        message: "What is your GitHub username?"      
    
},
{
    type: "input",
        name: "email",
        message: "What is your email address?"      
    
},
{
    type: "input",
        name: "title",
        message: "What is your project title?"      
    
},
{
    type: "input",
        name: "description",
        message: "What is your Project Description?"      
    
},
{
    type: "list",
        name: "license",
        message: "What is type of license are you using?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]      
    
},
{
    type: "input",
        name: "installation",
        message: "What is the installation command?"      
    
},
{
    type: "input",
        name: "test",
        message: "What is the command for test?"      
    
},
{
    type: "input",
        name: "usage",
        message: "What does the user need to know about the repo?"      
    
},
{
    type: "input",
        name: "contributor",
        message: "How do you contribute?"      
    
},
{
    type: "input",
        name: "userStory",
        message: "What is the user story for this application?"      
    
},
{
    type: "input",
        name: "version",
        message: "What version is the application?"      
    
},

];



// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers)=> {
        console.log("Here are the answers: ",answers);
        const fs = require('fs');
        fs.appendFile('README.md' ,generateMarkdown(answers), (err) =>
         err ? console.error(err) : console.log ('README GENERATED')
         )
})};

// function call to initialize program
init();
