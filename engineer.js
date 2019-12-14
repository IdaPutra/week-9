const inquirer = require("inquirer");
const employee= require("./employee");


class engineer extends employee{
    constructor(github){
     github;
    }
    getGithub(){
        return inquirer.prompt([
            {
              type: "input",
              name: "github",
              message: "Enter your github username"
            },
            
        ])
        .then(answers => {
           
          });

      
    }
    getrole(){
        return engineer;
    }
}

module.exports=engineer;
