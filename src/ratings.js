"use strict";
exports.__esModule = true;
/* animate thank-you-card on display */
var showThankYou = document.getElementById('thank-you-card');
showThankYou.addEventListener('mouseover', function () {
    showThankYou.style.transform = 'rotateY(360deg)';
});
/* hide rating card and display thank-you-card */
var runFunc = document.getElementById('submit');
runFunc.addEventListener('click', function () {
    var showThankYou = document.getElementById('thank-you-card');
    if (showThankYou != null) {
        showThankYou.style.display = 'block';
        var hideRating = document.getElementById('ratings-card');
        hideRating.style.display = 'none';
    }
});
/* get rating from button and display in thank-you-card */
var buttonListen = document.getElementsByClassName('button--rating');
var _loop_1 = function (i) {
    buttonListen[i].addEventListener('click', function () {
        var ratingOutPut = document.getElementById('rating--output');
        ratingOutPut.innerHTML = i + 1;
    });
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
;
exports["default"] = {};
