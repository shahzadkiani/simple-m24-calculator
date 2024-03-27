#!/usr/bin/env node
import inquirer from 'inquirer';

const answers = await inquirer.prompt([ 
    {message: "Enter first number",type:"number",name:"firstNumber"},
    {message: "Enter second number",type:"number",name:"secondNumber"},
    
    {
        message: "Select one of the operatorss to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
},

]);
///conditional statement
if (answers.operator === "Addition") {
console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "substraction"){
console.log(answers.firstNumber - answers.secondNumber);
}else if (answers.operator ==="Multiplication" ){
    console.log(answers.firstNumber * answers.secondNumber);
}else if (answers.operator ==="division" ){
    console.log(answers.firstNumber / answers.secondNumber);
}else {
    console.log("please select valid operator")
}