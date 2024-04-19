#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(60));
console.log(chalk.blue("Welcome to the Word counter"));
console.log("=".repeat(60));
let Answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    },
]);
// Triming the sentence and spliting it into words based on "spaces"
let words = Answers.sentence.trim().split(" ");
console.log(chalk.blue("The sentence is:"));
console.log(words);
console.log(chalk.green(`The number of words is ${words.length}`));
