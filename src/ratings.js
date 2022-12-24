"use strict";
/* Prevent default from form */
exports.__esModule = true;
exports.preventFormDefault = void 0;
function preventFormDefault() {
    var form = document.getElementById('form-rating');
    if (form != null) {
        form.addEventListener('submit', (function (event) { return event.preventDefault(); }));
    }
}
exports.preventFormDefault = preventFormDefault;
preventFormDefault();
/* Listen for click on buttons, get innerHTML for rating */
var ratingOutput = document.getElementById('rating--output');
var buttonRating = document.getElementsByClassName('button--rating');
for (var i = 0; i < 5; i++) {
    buttonRating[i].addEventListener('click', function (e) {
        ratingOutput.innerHTML = e.target.innerHTML;
    });
}
/* On submit hide rating card , display thank you card, animate */
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function () {
    var ratingCard = document.getElementById('ratings-card');
    var thankYou = document.getElementById('thank-you-card');
    ratingCard.style.display = 'none';
    thankYou.addEventListener('mouseover', function () {
        thankYou.style.transform = 'rotateY(360deg)';
    });
    thankYou.style.display = 'block';
});
exports["default"] = {};
