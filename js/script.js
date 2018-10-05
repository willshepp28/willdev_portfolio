

(function () {

    var p = document.getElementById('displayIntro');
    var about = document.querySelector('.about');
    var intro = document.querySelector('.intro')
    var stringOfWorlds = "Hello my name is Will Sheppard. And iam a developer whose skills include, HTML5, CSS3, Javascript, and Node.";
    //  turn string into a array
    var arrOfStrings = stringOfWorlds.split('');

    // changes the display of header based on the position of user scroll
    function headerDisplay() {

        // Get header 
        var header = document.querySelector('header');
        var image = document.querySelectorAll('.work-thumbnail');
        var work = document.querySelector('.mywork');
        

        window.addEventListener('scroll', function () {

            if (window.matchMedia("(min-width: 400px)").matches) {
                /* the viewport is at least 400 pixels wide */

                if (window.scrollY >= 475){
                    work.style.display = "flex";
                    work.className = "shortFadeIn";
                }
                 if (window.scrollY >= 600) {
                    header.className = "header2";
                  
                }

                if (window.scrollY < 600) {
                    header.className = "header1"
                }

            } else {
                /* the viewport is less than 400 pixels wide */
                if (window.scrollY >= 338) {
                    header.className = "mobile-header2"
                    work.style.display = "block";
                    work.className = "shortFadeIn";
                }

                if (window.scrollY < 338) {
                    header.className = "mobile-header1";
                }
            }
        });
    }





    // display introduction to screen
    function createWords(element, time) {
        let i = 0;
        let stopWords = arrOfStrings.length;

        var startWords = setInterval(function () {

            element.innerHTML += arrOfStrings[i];
            i++;

            if (i > stopWords - 1) {
                clearInterval(startWords);
            }
        }, time || 65);
    }




    createWords(p, 35);
    headerDisplay();

})();