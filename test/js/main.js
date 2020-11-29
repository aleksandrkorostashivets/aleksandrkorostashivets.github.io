
/** START SLIDER */
var $status = $('.pagination');
var $slickElement = $('.content-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1850,
      settings: {
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1500,
      settings: {
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1100,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '30px',
      }
    }
  ]
});
/**END SLIDER*/

/** START LIGHTBOX */
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
})
/**END LIGHTBOX*/

/*START BURGER MENU*/
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function () {
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
}

header__list.onclick = function () {
  header__list.classList.remove('active');
  back.classList.toggle('lock');
}
/*END BURGER MENU*/


/**modal */
var modal = document.getElementById('modal');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/**FORM */
/**mask */
let selector = document.querySelectorAll(`input[type="tel"]`);
let im = new Inputmask('+38 (999) 999-99-99');
im.mask(selector);

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
	let files = e.currentTarget.files;
	console.log(files);

	if (files.length) {
		fileInput.closest('.file__btn').querySelector('div').textContent = files[0].name;
	} else {
		fileInput.closest('.file__btn').querySelector('div').textContent = 'Фото компрессора';
	}

});

/**validate */
let validateForms = function(selector,rules, messages, successModal, yaGoal){
    new window.JustValidate(selector,{
      rules:rules,
      messages: {
        name:  'Поле обьязательное для заполнения',
        tel: 'Поле обьязательное для заполнения',
        filter: 'Поле обьязательное для заполнения'
      },
      submitHandler: function(form){
        let formData = new FormData(form);


        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', './mail.php', true);
			  xhr.send(formData);

        form.reset();
        
        fileInput.closest('.file__btn').querySelector('div').textContent = 'Фото компрессора';

      }
    });
}

validateForms('.contact-form', {filter:{required:true}, name:{required:true}, tel:{required:true} },  '.modal', 'send goal' )