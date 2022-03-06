(function(){

    const sliders = [...document.querySelectorAll('.ob__body')];
    const buttonNext = document.querySelector('#nextO');
    const buttonBefore = document.querySelector('#beforeO');
    let value;

    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony= document.querySelector('.ob__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove('ob__body--show');

        if(value === sliders.length+1 || value === 0){
            value = value===0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('ob__body--show');

    }

    /* setInterval(function() {
        changePosition(1);
    },6000) */

})();