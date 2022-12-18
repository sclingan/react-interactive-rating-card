"use strict";
exports.__esModule = true;
var runFunc = document.getElementById('submit');
runFunc.addEventListener('click', function () {
    var showRating = document.getElementById('thank-you-card');
    if (showRating != null) {
        showRating.style.display = 'block';
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
// export function thanks() {
//     let showRating: HTMLElement | null = document.getElementById('thank-you-card');
//     if(showRating != null) {
//         showRating.style.display = 'block';
//     }
// };
exports["default"] = {};
