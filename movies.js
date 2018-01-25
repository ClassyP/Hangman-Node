/* jshint esversion: 6 */
var words = [
    "Shrek",
    "Peter Pan",
    "Toy Story",
    "Ratatouille",
    "Catch Me If You Can",
    "Indiana Jones",
    "The Lion King",
    "The Sandlot",
    "Forest Gump",
    "Star Wars",
    "Aladdin",
    "The Incredibles",
    "The Little Mermaid",
    "Remember the Titans",
    "Back to the Future",
    "The Mighty Ducks",
    "Robin Hood",
    "Finding Nemo",
    "Jurassic Park",
    "Alice in Wonderland",
    "Horrible Bosses",
    "Hotel Transylvania",
    "Interstellar",
    "The Godfather",
    "Ferris Buellers Day Off",
    "Planet of the Apes",
    "The Mummy",
    "Spiderman",
    "The Purge",
    "Little Miss Sunshine",
    "The Departed",
    "Bad Neighbours",
    "No Country For Old Men",
    "Good Will Hunting",
    "Zombieland",
    "Dallas Buyers Club"
];

module.exports = {
    getRandomWord: function () {
        let randomIndex = Math.floor(Math.random() * words.length);
        let newWord = words[randomIndex];
        words.splice(randomIndex, 1);
        return newWord;
    },
    wordsRemaining: function(){
        return words.length;
    }
};