var progress = (function(){
    var control = document.getElementById('value_control');
    var progressValue = document.querySelector('.progress__value');
    var RADIUS = 98;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    progressValue.style.strokeDasharray = CIRCUMFERENCE;



    return {
        /*Функция добавляет анимацию к progress bar */
        setMod: function(animation, mode){
            if(animation==='animated' && mode==='yes') {
                document.querySelector('.progress__value').classList.add('animate');
            } else if(animation==='animated' && mode===''){
                document.querySelector('.progress__value').classList.remove('animate');
            }
            else if(event.target.checked) {
                document.querySelector('.progress__value').classList.add('animate');
            }
            else {
                document.querySelector('.progress__value').classList.remove('animate');
            }

        },
        /*Функция установки значения Progress bar через API или через интерфейс */
        setValue: function(value){
            var controlValue;

            if(control.value !== '') { // если пользователь ввел значение на экране, то использовать это значение
                controlValue = control.value;
            }
            else { //если не ввел, то использовать значение из API
                controlValue = value;
            }

            //строим окружность на основе принятых аргументов или введенных данных
            var progress = controlValue / 100;
            var dashoffset = CIRCUMFERENCE * (1 - progress);
            console.log('progress:', controlValue + '%', '|', 'offset:', dashoffset);
            progressValue.style.strokeDashoffset = dashoffset;
        },

        //функция прячет Progress bar, если переключатель Hide включен и наоборот
        hideProgressBar: function() {
            if(event.target.checked) {
                document.querySelector('.progress').classList.add('hidden');
            } else {
                document.querySelector('.progress').classList.remove('hidden');
            }
        }

    }



})();

/*Обработчики событий на 3х кнопка*/

document.getElementById('value_control').addEventListener('input', progress.setValue);
document.getElementById('do_animation').addEventListener('change', progress.setMod);
document.getElementById('hide').addEventListener('change', progress.hideProgressBar);


/*Можно раскомментировать и посмотреть работу API */
// progress.setValue(40);
// progress.setMod('animated', 'yes');