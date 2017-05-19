var clozeCard = function(question, answer) {
    if (this instanceof clozeCard) {
        this.cloze = answer;
        this.fullText = question;
        this.partial = question.replace(answer, "...");
    }
    else {return new clozeCard(inputs);}
}

module.exports = clozeCard;