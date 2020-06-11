const highscoreTable = document.querySelector("#highscoreTable");
const addScores = document.querySelector("#addScores");

function addScoresTable(){
    var saved = localStorage.getItem('highscoretable');
    console.log(saved);
    if (saved == "" || saved == null) {

    }else{
        highscoreTable.innerHTML = saved;
    };
    var getScore = localStorage.getItem("scoreInit");
    var newScore = JSON.parse(getScore);
    var newRow = document.createElement("tr");
    addScores.appendChild(newRow);
    var newData = document.createElement("td");
    var newDataText = document.createTextNode(newScore.initials);
    newRow.appendChild(newData);
    newData.appendChild(newDataText);
    var newData = document.createElement("td");
    var newDataText = document.createTextNode(newScore.score);
    newRow.appendChild(newData);
    newData.appendChild(newDataText);
    localStorage.setItem("highscoretable", highscoreTable.innerHTML);
};

addScoresTable();