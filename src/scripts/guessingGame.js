import PhotoSwipe from '../libs/PhotoSwipe/photoswipe';
import PhotoSwipeUI_Default from '../libs/PhotoSwipe/photoswipe-ui-default';

export default function GuessingGame(container, json) {
    Newsroom.ajax(json).then(function (json) {

        var photoswipeUI = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"> <div class="pswp__container"> <div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div></div></div></div></div>';
        container.innerHTML = photoswipeUI;

        var R = new Newsroom.rapid,
            pswpElement = document.querySelectorAll('.pswp')[0];

        document.onclick = clear;
        document.onscroll = clear;

        function clear() {
            if (pswpElement.getAttribute('aria-hidden') !== 'false') {
                do {
                    var test = false;
                    R.e(container.children, function (elem) {
                        if (elem.nodeName === 'IMG' && !elem.classList.contains('gallary-preview')) {
                            elem.remove();
                            test = true;
                        }
                    });
                } while (test);
            }
        }

        function importCSS(file) {
            return new Promise(function (res) {
                var head = document.head,
                    elem = document.createElement('link');
                elem.type = "text/css";
                elem.rel = "stylesheet";
                elem.href = file;
                head.appendChild(elem);
                res();
            });
        }

        importCSS('../src/libs/PhotoSwipe/photoswipe.css');
        importCSS('../src/libs/PhotoSwipe/default-skin/default-skin.css');

        var promises = [],
            items = [];
        R.e(json, function (image) {
            promises.push(new Promise(function (res) {
                var temp = new Image();
                temp.src = image;
                image = temp;
                image.onload = function () {
                    items.push({
                        src: this.src,
                        w: this.width,
                        h: this.height
                    });
                    res();
                };
            }));
        });


        Promise.all(promises).then(function () {
            R.e(json, function (image) {
                var elem = R.c('img');
                elem.src = image;
                elem.classList.add('gallary-preview');
                R.a(container, elem);
                elem.onclick = gallery;
            });
            var submitBtn = R.c('button.submit-answers', 'Submit answers');
            R.a(container, submitBtn);
        });

        function gallery() {
            R.e(json, function (image) {
                var elem = R.c('img');
                elem.src = image;
                R.a(container, elem);
            });
            var options = {
                history: false,
                focus: false,
                showAnimationDuration: 0,
                hideAnimationDuration: 0
            }
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        }

    });
}