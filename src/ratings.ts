let runFunc: any = document.getElementById('submit');
runFunc.addEventListener('click', function() {
    let showRating: HTMLElement | null = document.getElementById('thank-you-card');
     if(showRating != null) {
       showRating.style.display = 'block';
       let hideRating: any = document.getElementById('ratings-card');
       hideRating.style.display = 'none';
     }
});


let buttonListen = document.getElementsByClassName('button--rating') as HTMLCollectionOf<HTMLElement>
for(let i = 0; i < 5; i++){
buttonListen[i].addEventListener('click', function() {
    let ratingOutPut: any = document.getElementById('rating--output');
    ratingOutPut.innerHTML = i + 1;
})
};










export default {};