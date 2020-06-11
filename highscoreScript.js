const highscoreTable = document.querySelector("#highscoreTable");
const addScores = document.querySelector("#addScores");

function addScoresTable(){
    var newRow = document.createElement("tr");
    addScores.appendChild(newRow);
    var newData = document.createElement("td");
    var newDataText = document.createTextNode(localStorage.getItem("initials"));
    newRow.appendChild(newData);
    newData.appendChild(newDataText);
    var newData = document.createElement("td");
    var newDataText = document.createTextNode(localStorage.getItem("score"));
    newRow.appendChild(newData);
    newData.appendChild(newDataText);
}

addScoresTable();