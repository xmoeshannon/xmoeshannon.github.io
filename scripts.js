var numberOfQuestions = 5
// javascript object representing genres and their corresponding counts...
var genreObj = {
    'classical': 0,
    'country': 0,
    'dance' : 0,
    'disney' : 0,
    'hiphop' : 0,
    'rock' : 0
};

Init();

function Init() {
    // hide all question DIVs
    for (var i = 1; i <= numberOfQuestions; i++) {
        var id = document.getElementById('q' + i.toString());
        id.style.display = 'none';
    }
    // show 1st question DIV element....
    document.getElementById('q1').style.display = 'block';
}

function LogAnswer(question, genre) {
    for (const property in genreObj) {
        if (property == genre) {
            genreObj[property] = genreObj[property] + 1;
        }
    }
    // 'hide' current question DIV and show next question DIV...
    document.getElementById('q' + question).style.display = 'none';
    if (parseInt(question) < numberOfQuestions) {
        document.getElementById('q' + (parseInt(question) + 1).toString()).style.display = 'block';
    } else {
      // go to results page
      var result = GetResults();
      location.href = "/result-page-" + result + ".html";  
    }
}

function GetResults() {
    var maxResults = [];
    const keys = Object.keys(genreObj);
    const values = keys.map(k => {
        return genreObj[k];
    });
    // get max count value then get all genres that have that max count
    const max = Math.max.apply(null, values);
    for (const property in genreObj) {
        if (genreObj[property] == max) {
            maxResults.push(property);
        }
    }
    // now lets get a random element from array...
    return maxResults[Math.floor(Math.random() * maxResults.length)];
}