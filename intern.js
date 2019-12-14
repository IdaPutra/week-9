const inquirer = require("inquirer");
const employee= require("./employee");


class intern extends employee{
    constructor(school){
school=school;
    }

    getSchool(){
        return inquirer.prompt([
            {
              type: "input",
              name: "school",
              message: "Enter your school name"
            },
            
        ]);
    }
    getrole(){
        return intern;
    }
}

module.exports=intern;

