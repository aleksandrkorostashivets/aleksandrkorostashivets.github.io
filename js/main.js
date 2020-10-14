$(function() {
    function init() {

        wait(1000).then(() => {
            clearText()
            typeText('and I`m ').then(typeLoop)
        })

        function typeLoop() {
            typeText('coffee addict')
                .then(() => wait(2000))
                .then(() => removeText('coffee addict'))
                .then(() => typeText('html-coder'))
                .then(() => wait(2000))
                .then(() => removeText('html-coder'))
                .then(() => typeText('maybe good person'))
                .then(() => wait(2000))
                .then(() => removeText('maybe good person'))
                .then(() => typeText('front-end developer'))
                .then(() => wait(2000))


        }

    }
    const elementNode = document.getElementById('type-text')
    let text = ''

    function updateNode() {
        elementNode.innerText = text
    }

    function pushCharacter(character) {
        text += character
        updateNode()
    }

    function popCharacter() {
        text = text.slice(0, text.length - 1)
        updateNode()
    }

    function clearText() {
        text = ''
        updateNode()
    }


    function wait(time) {
        if (time === undefined) {
            const randomMsInterval = 100 * Math.random()
            time = randomMsInterval < 50 ? 10 : randomMsInterval
        }

        return new Promise(resolve => {
            setTimeout(() => {
                requestAnimationFrame(resolve)
            }, time)
        })
    }

    function typeCharacter(character) {
        return new Promise(resolve => {
            pushCharacter(character)
            wait().then(resolve)
        })
    }

    function removeCharacter() {
        return new Promise(resolve => {
            popCharacter()
            wait().then(resolve)
        })
    }

    function typeText(text) {
        return new Promise(resolve => {

            function type([character, ...text]) {
                typeCharacter(character)
                    .then(() => {
                        if (text.length) type(text)
                        else resolve()
                    })
            }

            type(text)
        })
    }

    function removeText({ length: amount }) {
        return new Promise(resolve => {

            function remove(count) {
                removeCharacter()
                    .then(() => {
                        if (count > 1) remove(count - 1)
                        else resolve()
                    })
            }

            remove(amount)
        })
    }


    init()




});
jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});

jQuery('.Count').each(function() {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 6000,
        easing: 'swing',
        step: function() {
            $this.text(Math.ceil(this.Counter));
        }
    });
});

$(".btn-menu").on("click", function() {
    $('.menu').addClass("active");
});
$('.close-menu').on('click', function() {

    $('.menu').removeClass('active');
});
$('.menu__list ul li a').on('click', function() {
    $(this).closest('.menu')
        .removeClass('active');
});