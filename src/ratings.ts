/* animate thank-you-card on display */
let showThankYou: any = document.getElementById('thank-you-card');
showThankYou.addEventListener('mouseover', function(){
    showThankYou.style.transform = 'rotateY(360deg)';

});


/* hide rating card and display thank-you-card */ 
let runFunc: any = document.getElementById('submit');
runFunc.addEventListener('click', function() {
    let showThankYou: HTMLElement | null = document.getElementById('thank-you-card');
     if(showThankYou != null) {
       showThankYou.style.display = 'block';
                
       let hideRating: any = document.getElementById('ratings-card');
       hideRating.style.display = 'none';
     }
});

/* get rating from button and display in thank-you-card */
let buttonListen = document.getElementsByClassName('button--rating') as HTMLCollectionOf<HTMLElement>
for(let i = 0; i < 5; i++){
buttonListen[i].addEventListener('click', function() {
    let ratingOutPut: any = document.getElementById('rating--output');
    ratingOutPut.innerHTML = i + 1;
})
};














export default {};