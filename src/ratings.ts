/* Prevent default from form */

export function preventFormDefault () {
    let form: HTMLElement | null = document.getElementById('form-rating');
    if(form != null) {
        form.addEventListener('submit', (event => event.preventDefault()));
    }
}

preventFormDefault();

/* Listen for click on buttons, get innerHTML for rating */
let ratingOutput: any = document.getElementById('rating--output');
let buttonRating = document.getElementsByClassName('button--rating') as HTMLCollectionOf<HTMLElement>;
for(let i = 0; i < 5; i++){
buttonRating[i].addEventListener('click', (e: any) => {
    ratingOutput.innerHTML = e.target.innerHTML;
});
}

/* On submit hide rating card , display thank you card, animate */


let submitButton: any = document.getElementById('submit');
submitButton.addEventListener('click', function() {
    let ratingCard: any = document.getElementById('ratings-card');
    let thankYou: any = document.getElementById('thank-you-card');
    ratingCard.style.display = 'none';
    thankYou.addEventListener('mouseover', function() {
        thankYou.style.transform = 'rotateY(360deg)';
    })
    thankYou.style.display = 'block';
});


















export default {};