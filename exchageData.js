var right = "";
var left = "";
var interval1;
var interval2;
document.getElementById("btn1").addEventListener('click', () => {
    if (document.getElementById("field1").value != "") {
        interval1 = setInterval(() => {
            if (interval2) {
                clearInterval(interval2);
            }
            left = document.getElementById("field1").value;
            right = left.charAt(0)+right;
            document.getElementById("field2").value = right;
            document.getElementById("field1").value = left.slice(1, left.length);
            if (left.length == 0) {
                clearInterval(interval1);
            }
        }, 1000);

    }
    else {

        alert("Enter text to perform operation");
    }
});
document.getElementById("btn2").addEventListener('click', () => {
    if (interval1) {
        clearInterval(interval1);
    }
    if (interval2) {
        clearInterval(interval2);
    }
});
document.getElementById("btn3").addEventListener('click', () => {
    if (document.getElementById("field2").value != "") {
        interval2 = setInterval(() => {
            if (interval1) {
                clearInterval(interval1);
            }
            right = document.getElementById("field2").value;
            left = document.getElementById("field1").value;
            left = right.charAt(0) + left;
            document.getElementById("field1").value = left;
            document.getElementById("field2").value = right.slice(1, right.length);
            if (left.length == 0) {
                clearInterval(interval2);
            }
        }, 1000);
    }
    else {
        alert("Enter text to perform operation");
    }
});

function returnCharToTransfer(left, right) {

}