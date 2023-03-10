const fontSizeControlEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');


fontSizeControlEl.addEventListener('input', function () {
    textSpanEl.style.fontSize = this.value + "px";
});
