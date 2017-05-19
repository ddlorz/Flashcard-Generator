var basicCard = function (question, answer) {
    if (this instanceof basicCard) {
        this.front = question;
        this.back = answer;
    }
    else {return new basicCard(inputs);}
};

module.exports = basicCard;