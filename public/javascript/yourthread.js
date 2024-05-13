let heart = document.querySelector('.heart');
let comment = document.querySelector('.comment');
let share = document.querySelector('.share');

let unfilledHeart = document.getElementById('unfilledHeart');
let filledHeart = document.getElementById('filledHeart');
let unfilledComment = document.getElementById('unfilledComment');
let filledComment = document.getElementById('filledComment');
let unfilledShare = document.getElementById('unfilledShare');
let filledShare = document.getElementById('filledShare');

heart.addEventListener('click', function() {
        unfilledHeart.classList.toggle('d-none');
        filledHeart.classList.toggle('d-none');
});

comment.addEventListener('click', function() {
        unfilledComment.classList.toggle('d-none');
        filledComment.classList.toggle('d-none');
});

share.addEventListener('mouseover', function() {
        unfilledShare.classList.toggle('d-none');
        filledShare.classList.toggle('d-none');
});

share.addEventListener('mouseout', function() {
        unfilledShare.classList.toggle('d-none');
        filledShare.classList.toggle('d-none');
});