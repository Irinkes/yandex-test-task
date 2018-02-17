var progress = (function(){
    var control = document.getElementById('value_control');
    var progressValue = document.querySelector('.progress__value');
    var RADIUS = 98;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    return {
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
        setValue: function(value){
            var controlValue;

            if(control.value !== '') {
                controlValue = control.value;
            }
            else {
                controlValue = value;
            }

            var progress = controlValue / 100;
            var dashoffset = CIRCUMFERENCE * (1 - progress);
            console.log('progress:', controlValue + '%', '|', 'offset:', dashoffset);
            progressValue.style.strokeDashoffset = dashoffset;
        },

        hideProgressBar: function() {
            if(event.target.checked) {
                document.querySelector('.progress').classList.add('hidden');
            } else {
                document.querySelector('.progress').classList.remove('hidden');
            }
        }

    }


})();


var control = document.getElementById('value_control');

var progressValue = document.querySelector('.progress__value');

var RADIUS = 100;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;





control.addEventListener('input', progress.setValue);
document.getElementById('do_animation').addEventListener('change', progress.setMod);
document.getElementById('hide').addEventListener('change', progress.hideProgressBar);

progressValue.style.strokeDasharray = CIRCUMFERENCE;
// progress.setValue(40);
// progress.setMod('animated', 'yes');