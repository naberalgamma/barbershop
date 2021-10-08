let offset = 0; /* смещение от левого края */
const sliderRow = document.querySelector('.slider-row'); /* находим на странице по селектору */
const sliderNext = document.querySelector('.block-one-button-next'); /* находим кнопку Next по селектору */
const sliderPrev = document.querySelector('.block-one-button-back'); /* находим кнопку Prev по селектору */   
sliderNext.addEventListener('click', function(){
    offset = offset + 300; // буквально 0 + 250
    if (offset > 1200) {
        offset = 0; // возвращение на нулевую позицию
    }
    sliderRow.style.left = -offset + 'px';
});     
sliderPrev.addEventListener('click', function () {
    offset = offset - 300;
    if (offset < 0) {
        offset = 1200;
    }     sliderRow.style.left = -offset + 'px';
});    