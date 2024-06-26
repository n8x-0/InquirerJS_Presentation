import inquirer from "inquirer"

//syntax
//inquirer.prompt(question)

//we define question , its type and its behavior with an 'object'

let quesObj = {
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
// To ask more than one question
// we know that we can store multiple values in an array similarly we are going to store multiple question objects in an array
// [ {}, {}, {}... ]

const multiQues = await inquirer.prompt(
    [
        {},
        {},
        {}
    ]
)