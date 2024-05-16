#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(100000 + Math.random() * 80000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Please Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please entre a non-empty vaule.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ["css", "python", "SQL", "html", "php",]
    }
]);
const tutionFee = {
    "css": 5000,
    "python": 7000,
    "SQL": 9000,
    "html": 1200,
    "php": 15000,
};
console.log(`\nTution Fee: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        choices: ["bank transfer", "easypaisa", "jazzcash", "sadapay", "nayapay"]
    },
    {
        name: "amount",
        type: "input",
        message: "money transfer",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please entre a non-empty value.";
        },
    }
]);
console.log(`\n you select payment method ${paymentMethod.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentMethod.amount);
if (tutionFees === paymentAmount) {
    console.log(`congratulation you have successfully entrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["view status", "Exit"]
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n*******Status*******\n");
        console.log(`Student Name:${answer.students}`);
        console.log(`Student ID ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fee Paid:${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log("\n Exiting Student Management\n");
    }
}
else {
    console.log("invalid amount due to course");
}
