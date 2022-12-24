/* Prevent default from form */
function preventFormDefault () {
    let form: HTMLElement | null = document.getElementById('form-rating');
    if(form != null) {
        form.addEventListener('submit', (event => event.preventDefault()));
    }
}

preventFormDefault();

/* Listen for click on buttons, get innerHTML for rating */
let ratingOutput: HTMLElement| null = document.getElementById('rating--output');
let buttonRating = document.getElementsByClassName('button--rating') as HTMLCollectionOf<HTMLElement>;
for(let i = 0; i < 5; i++){
buttonRating[i].addEventListener('click', (e: any) => {
    if(ratingOutput != null) {
    ratingOutput.innerHTML = e.target.innerHTML;
    }
});
}

/* On submit hide rating card , display thank you card, animate */
let submitButton: HTMLElement | null = document.getElementById('submit');
if(submitButton != null) {
submitButton.addEventListener('click', function() {
    let ratingCard: HTMLElement | null = document.getElementById('ratings-card');
    let thankYou: any = document.getElementById('thank-you-card');
    if(ratingCard != null) {
    ratingCard.style.display = 'none';
    };
    thankYou.addEventListener('mouseover', function() {
        thankYou.style.transform = 'rotateY(360deg)';
    })
    thankYou.style.display = 'block';
})
};


















export default {};