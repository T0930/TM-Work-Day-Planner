

var eventAdd1 = document.getElementById('text1');
var eventAdd2 = document.getElementById('text2');
var eventAdd3 = document.getElementById('text3');
var eventAdd4 = document.getElementById('text4');
var eventAdd5 = document.getElementById('text5');
var eventAdd6 = document.getElementById('text6');
var eventAdd7 = document.getElementById('text7');
var eventAdd8 = document.getElementById('text8');
var eventAdd9 = document.getElementById('text9');

var SaveBtn1 = document.getElementById('sBtn1')
var SaveBtn2 = document.getElementById('sBtn2')
var SaveBtn3 = document.getElementById('sBtn3')
var SaveBtn4 = document.getElementById('sBtn4')
var SaveBtn5 = document.getElementById('sBtn5')
var SaveBtn6 = document.getElementById('sBtn6')
var SaveBtn7 = document.getElementById('sBtn7')
var SaveBtn8 = document.getElementById('sBtn8')
var SaveBtn9 = document.getElementById('sBtn9')
var rBtn1 = document.getElementById('rBtn');


function saveLastEntry() {
    
    var outPut = {
        eventAdd1: eventAdd1.value.trim(),
        eventAdd2: eventAdd2.value.trim(),
        eventAdd3: eventAdd3.value.trim(),
        eventAdd4: eventAdd4.value.trim(),
        eventAdd5: eventAdd5.value.trim(),
        eventAdd6: eventAdd6.value.trim(),
        eventAdd7: eventAdd7.value.trim(),
        eventAdd8: eventAdd8.value.trim(),
        eventAdd9: eventAdd9.value.trim()
    };
    
    localStorage.setItem("outPut", JSON.stringify(outPut));
}

function showLastEntry() {
    var lastEntry = JSON.parse(localStorage.getItem("outPut"));
    if (lastEntry !== null) {
        document.getElementById("text1").innerHTML = lastEntry.eventAdd1;
        document.getElementById("text2").innerHTML = lastEntry.eventAdd2;
        document.getElementById("text3").innerHTML = lastEntry.eventAdd3;
        document.getElementById("text4").innerHTML = lastEntry.eventAdd4;
        document.getElementById("text5").innerHTML = lastEntry.eventAdd5;
        document.getElementById("text6").innerHTML = lastEntry.eventAdd6;
        document.getElementById("text7").innerHTML = lastEntry.eventAdd7;
        document.getElementById("text8").innerHTML = lastEntry.eventAdd8;
        document.getElementById("text9").innerHTML = lastEntry.eventAdd9;
    } else {
        return;
    }
}

rBtn1.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


SaveBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn2.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn3.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn4.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn5.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn6.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn7.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn8.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});

SaveBtn9.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastEntry();
    showLastEntry();
});
 
function post() {
    showLastEntry();
}
post();

var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});



$("#CurrentTime").text(moment().format('kkmm'));


var currentTime = (moment().format("kkmm")); // Comment out // replace with | var currentTime = ('1200'); |  This will simulate 12:00pm


console.log(currentTime);

if (currentTime > '0859') {
    $('#text1').addClass('past');
} else if (currentTime > '0759' && currentTime <= '0859') {
    $('#text1').addClass('present');
} else {
    $('#text1').addClass('future');
};

if (currentTime > '0959') {
    $('#text2').addClass('past');
} else if (currentTime > '0859' && currentTime <= '0959') {
    $('#text2').addClass('present');
} else {
    $('#text2').addClass('future');
};

if (currentTime > '1059') {
    $('#text3').addClass('past');
} else if (currentTime > '0959' && currentTime <= '1059') {
    $('#text3').addClass('present');
} else {
    $('#text3').addClass('future');
};


if (currentTime > '1159') {
    $('#text4').addClass('past');
} else if (currentTime > '1059' && currentTime <= '1159') {
    $('#text4').addClass('present');
} else {
    $('#text4').addClass('future');
};


if (currentTime > '1259') {
    $('#text5').addClass('past');
} else if (currentTime > '1159' && currentTime <= '1259') {
    $('#text5').addClass('present');
} else {
    $('#text5').addClass('future');
};

if (currentTime > '1359') {
    $('#text6').addClass('past');
} else if (currentTime > '1259' && currentTime <= '1359') {
    $('#text6').addClass('present');
} else {
    $('#text6').addClass('future');
};

if (currentTime > '1459') {
    $('#text7').addClass('past');
} else if (currentTime > '1359' && currentTime <= '1459') {
    $('#text7').addClass('present');
} else {
    $('#text7').addClass('future');
};

if (currentTime > '1559') {
    $('#text8').addClass('past');
} else if (currentTime > '1459' && currentTime <= '1559') {
    $('#text8').addClass('present');
} else {
    $('#text8').addClass('future');
};

if (currentTime > '1659') {
    $('#text9').addClass('past');
} else if (currentTime > '1559' && currentTime <= '1659') {
    $('#text9').addClass('present');
} else {
    $('#text9').addClass('future');
};
