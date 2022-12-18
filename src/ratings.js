"use strict";
exports.__esModule = true;
var showThankYou = document.getElementById('thank-you-card');
showThankYou.addEventListener('mouseover', function () {
    showThankYou.style.transform = 'rotateY(360deg)';
});
var runFunc = document.getElementById('submit');
runFunc.addEventListener('click', function () {
    var showThankYou = document.getElementById('thank-you-card');
    if (showThankYou != null) {
        showThankYou.style.display = 'block';
        var hideRating = document.getElementById('ratings-card');
        hideRating.style.display = 'none';
    }
});
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
