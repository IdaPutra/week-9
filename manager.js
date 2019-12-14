const inquirer = require("inquirer");
const employee= require("./employee");

class manager extends employee{
constructor(officeNumber){
    officeNumber=officeNumber;
}
getoffice(){
    return inquirer.prompt([
        {
          type: "number",
          name: 0,
          message: "Enter your office number"
        },
        
    ]);

 
}

getrole(){
    return manager;
}
}

module.exports=manager;