var inquirer = require("inquirer");
var fs = require('fs');

function logCard(fileName, content) {
    fs.appendFile(fileName, JSON.stringify(content) + '\n', function(err) {
        if (err) {console.log(err);}
    });
}

function BasicCard(inputs) {
    if (this instanceof BasicCard) {
        this.type = inputs.type;
        this.front = inputs.question;
        this.back = inputs.answer;
    }
    else {return new BasicCard(inputs);}
};

function ClozeCard(inputs) {
    if (this instanceof ClozeCard) {
        this.type = inputs.type;
        this.cloze = inputs.answer;
        this.fullText = inputs.question;
        this.partial = inputs.question.replace(inputs.answer, "...");
    }
    else {return new ClozeCard(inputs);}
}

inquirer.prompt([
    { type: "list",
      name: "type",
      choices: ["Basic", "Cloze"],
      message: "Basic or Cloze: "}, 
    { type: "input",
      name: "question",
      message: "Question: "}, 
    { type: "input", 
      name: "answer",
      message: "Answer: "
  }]).then(function(inputs) {
            if (inputs.type === "Basic") {
                var newBasicCard = new BasicCard(inputs);
                console.log(JSON.stringify(newBasicCard));
                logCard("basic.txt", newBasicCard);
            }
            else if (inputs.type === "Cloze") {    
                var newClozeCard = new ClozeCard(inputs); 
                console.log(JSON.stringify(newClozeCard));
                logCard("cloze.txt", newClozeCard);          
            }
});

