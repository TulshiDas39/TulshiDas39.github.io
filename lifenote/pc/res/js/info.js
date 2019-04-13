
var readyStateCheckInterval = setInterval(function () {

    if (document.readyState === "complete") {

        clearInterval(readyStateCheckInterval);

        var path = document.location.href;
        //(path);
        var file = path.substring(0, path.lastIndexOf('/'))+"/languages.csv";
        //alert(file);
        readTextFile(file);
        //alert(languages);
       // setLanguages(languages);
    }
}, 10);

function setLanguages(languages){
    var languagesElem = document.getElementById('languages');
    var lines = languages.split('\n');
    var elem;
    //alert('has come');
    //alert(lines.length);
    for(var i=0;i<lines.length;i++){
        elem = document.createElement('option');
        elem.innerHTML = lines[i].split(',')[3];
        //alert(lines[i].split(',')[3]);
        languagesElem.appendChild(elem);
    }
}


function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
               var allText = rawFile.responseText;
               // alert(allText.split('\n')[185]);
               //alert('ok');
               setLanguages(allText);
            }
        }
    }
    rawFile.send(null);
}

