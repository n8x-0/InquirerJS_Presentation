===============================================

INQUIRER

===============================================

npm init -y    
"type": "module"

================================================

tsc --init 
"target": "ES2022"    
"module": "NodeNext"               
"moduleResolution": "NodeNext"

================================================

npm i inquirer @types/inquirer -D

================================================

syntax of inquirer
        ↓
inquirer.prompt(question)

its a async method so we use await before it
        ↓
await inquirer.prompt(question)

we define our question with an object containig properties of our question, like what type of question is it, what is the question etc
        ↓
const ques = {
    name: "ans",
    message: "wahts your name",
    type: "input"
}

================================================

combining the above steps, we get

const ques = await inquirer.prompt(
    {
        name: "ans",
        message: "wahts your name",
        type: "input"
    }
)
console.log(ques.ans)

note: we can have more properties of our question and its behaviour, we should discuss later and those are also available on inquirer documentation
================================================

to have multiple questions,
we know array as we can store multiple values in an array so similarly we should store our multiple question objects in an array

const ques = await inquirer.prompt(
    [
        {
            name: "user_email",
            message: "Enter your email",
            type: "input"
        },
        {
            name: "password",
            message: "enter your password",
            type: "password"
        },
        {
            name: "age",
            message: "Enter Your Age",
            type: "number"
        }
    ]
);

console.log(` user: ${ques.user_email}\n password: ${ques.password}\n age: ${ques.age}`)

=================================================

finally discussing types and other attributes.