const inquirer = require("inquirer");


class employee{
    constructor(name,id,title){
        this.name=name;
        this.id=id;
        this.title=title;
    }

    getName(){
         return inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "Enter your name"
            },
            
        ]);
        
    }
  getID(){
    return inquirer.prompt([
        {
          type: "number",
          name: 0,
          message: "Enter your ID"
        },
        
    ]);
  }  
  getEmail(){
    return inquirer.prompt([
        {
          type: "input",
          name: "email",
          message: "Enter your Email"
        },
        
    ]);
  }
  getrole(){
    return employee; 
      
  }

}

   
   module.exports=employee;      
    

