var basicCard = require('./basicCard.js')
var clozeCard = require('./clozeCard.js')

var basic_card = new basicCard('Who is the best American President?', 
                               'Dwayne Elizondo Mountain Dew Herbert Camacho');
console.log(basic_card.front + '\n' + basic_card.back);

var cloze_card = new clozeCard('Dwayne Elizondo Mountain Dew Herbert Camacho is the best president.', 
                               'Dwayne Elizondo Mountain Dew Herbert Camacho');                               
console.log(cloze_card.partial + '\n' + cloze_card.cloze+ '\n' + cloze_card.fullText);

