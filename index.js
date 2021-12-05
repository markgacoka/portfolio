let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let sec = document.querySelector('.sec');
let sechome = document.querySelector('.sechome');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    if (navigation.classList.contains('active') && sec !== null) {
        sec.style.display = 'none';
    } else {
        sechome.style.display = 'none';
    }
}