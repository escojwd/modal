const modalBtn = document.getElementById('modal-button');
const modalMain = document.getElementById('modal-main');
const closeBtn = document.getElementById('close');

modalBtn.addEventListener('click', function(){
    modalMain.classList.add('active');
})

closeBtn.addEventListener('click', function(){
    modalMain.classList.remove('active');
})

modalMain.addEventListener('click', function(e) {
    if (e.target === modalMain) {
        modalMain.classList.remove('active');
    }
})
