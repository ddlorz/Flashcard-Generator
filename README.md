# Flashcard-Generator
Flashcard-Generator

HOW TO USE:

Run command 'node flashcard.js' in your CLI to run the script.

To use the API, call the constructor by using 'new basicCard()' for the basic card function or 'new clozeCard()' for the cloze card function. This is can be done by adding a line of code in the flashcard.js file. Example line of code is:
    'var basic_card = new basicCard('Who is the best American President?', 'Dwayne Elizondo Mountain Dew Herbert Camacho');'
    'var cloze_card = new clozeCard('Dwayne Herbert Camacho is the best president.', 'Dwayne Herbert Camacho');        

Basic Card: The parameters are (question, answer)
Cloze Card: The parameters are (statement, answer)

CONSTRUCTOR OUTPUTS:

The constructors will return the following:

  Basic Card:
    this.front = <the question>
    this.back = <the answer>
    
  Cloze Card:
    this.cloze = <the answer>
    this.fulltext = <the statement>
    this.partial = <the statement with the answer replaced by ...>
