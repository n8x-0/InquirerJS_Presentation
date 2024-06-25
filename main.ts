import inquirer from "inquirer"

//syntax
//inquirer.prompt(question)

//we define question , its type and its behavior with an 'object'

let quesObj = {
    name: "ans",
    message: "whats your name",
    type: "input"
}

//===============================================================
//we use await with it because it's a promise and asynchronus code
//How to access results
//To access it we should store it in a container (variable) as obvious

const ques = await inquirer.prompt([quesObj])
console.log(ques);                                        

//===============================================================
//combining all those steps 

const comb = await inquirer.prompt(
    {
        name: "ans",
        message: "Whats your age",
        type: "number"
    }
)
console.log(comb.ans);

//=============================================================
// follow the inq Steps.md file