(function(){

    const sliders = [...document.querySelectorAll('.us__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony= document.querySelector('.us__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove('us__body--show');

        if(value === sliders.length+1 || value === 0){
            value = value===0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('us__body--show');

    }

    /* setInterval(function() {
        changePosition(1);
    },6000) */

})();