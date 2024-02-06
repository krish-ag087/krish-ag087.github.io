function like1() {
    var butn = document.getElementById('one');
    document.getElementById("result1").innerHTML = localStorage.clickcount1;
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount1) {
            if (butn.style.color == "black") {
                butn.style.color = "red";
                localStorage.clickcount1 = Number(localStorage.clickcount1) + 1;
            }
            else {
                butn.style.color = "black";
                localStorage.clickcount1 = Number(localStorage.clickcount1) - 1;
            }
        }
        else
            localStorage.clickcount1 = 1;
    }
    document.getElementById("result1").innerHTML = localStorage.clickcount1;
}
function like2() {
    var butn2 = document.getElementById('two');
    document.getElementById("result2").innerHTML = localStorage.clickcount;
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            if (butn2.style.color == "black") {
                butn2.style.color = "red";
                localStorage.clickcount = Number(localStorage.clickcount) + 1;
            }
            else {
                butn2.style.color = "black";
                localStorage.clickcount = Number(localStorage.clickcount) - 1;
            }
        }
        else
            localStorage.clickcount = 1;
    }
    document.getElementById("result2").innerHTML = localStorage.clickcount;
}