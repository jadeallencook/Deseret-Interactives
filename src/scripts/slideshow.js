export default function Slideshow(container, title, color, json) {
    Newsroom.ajax(json).then(function (json) {

        var R = new Newsroom.rapid;
        var current = 0;

        // next slide elem
        var next = R.c('div');
        var arrow = R.c('div');
        R.a(next, arrow);
        R.a(container, next);
        next.onclick = function() {
            current++;
            show(current);
        }
        
        // current slide num
        var slideElem = R.c('span', '1');
        R.a(container, slideElem);
        // interactive title
        R.a(container, R.c('h2', title));
        // main text 
        var textElem = R.c('p', 'loading...');
        R.a(container, textElem);
        // slide image
        var imageElem = R.c('img');
        imageElem.setAttribute('src', null);
        R.a(container, imageElem);

        function show(slide) {
            if (slide + 1 > json.length) {
                slide = 0;
                current = 0;
            }
            slideElem.innerText = slide + 1;
            slide = json[slide];
            textElem.innerHTML = slide.html;
            imageElem.setAttribute('src', slide.image);
        }

        if (color) {
            slideElem.style.color = color;
            arrow.style.borderLeftColor = color;
            container.style.backgroundColor = color;
        }

        show(current);
    });
}