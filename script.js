const paper = document.querySelector('.paper');
const letter = document.querySelector(".wrapper");

letter.addEventListener("click", function() {
    paper.classList.toggle("paper-change");
    letter.classList.toggle("wr-hidden");
})