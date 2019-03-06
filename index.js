
(function(){
    var day = document.getElementById('birthdate_day');
    var month = document.getElementById('birthdate_month');
    var year = document.getElementById('birthdate_year');

    var selectElem;
    alert('has come');
    for(var i=1;i<31;i++){
        selectElem = document.createElement('option');
        selectElem.innerHTML = i+"";
        day.appendChild(selectElem);
    }

    for(var i=1;i<=12;i++){
        selectElem = document.createElement('option');
        selectElem.innerHTML = i+"";
        month.appendChild(selectElem);
    }

    for(var j=1;j<100;j++){
        selectElem = document.createElement('option');
        selectElem.innerHTML = (j+1920)+"";
        year.appendChild(selectElem);
    }
})();