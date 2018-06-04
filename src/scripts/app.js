// import new interactives here
import List from './list.js';
import Timeline from './timeline.js'
import Navigational from './navigational.js';
import Faqs from './faqs.js';
import Bullets from './bullets.js';

window.Newsroom = {
    parameter: function (interactive, parameter) {
        return interactive.getAttribute('data-' + parameter);
    },
    ajax: function (src) {
        return new Promise(function (res, rej) {
            var request = new XMLHttpRequest;
            request.onload = function () {
                res(JSON.parse(this.response));
            }
            request.open('get', src);
            request.send();
        })
    },
    init: function () {
        var interactives = document.getElementsByClassName('interactive');
        for (var x = 0; x < interactives.length; x++) {
            var interactive = interactives[x],
                type = interactive.getAttribute('data-type');
            if (!type) console.warn('Newsroom Interactives: There was no type set for the interactive.');
            // follow pattern below to add new interactives
            else if (type === 'list') new List(interactive, Newsroom.parameter(interactive, 'src'), Newsroom.parameter(interactive, 'style'));
            else if (type === 'timeline') new Timeline(interactive, Newsroom.parameter(interactive, 'src'), Newsroom.parameter(interactive, 'color'), Newsroom.parameter(interactive, 'title'), Newsroom.parameter(interactive, 'height'));
            else if (type === 'navigational') new Navigational(interactive, Newsroom.parameter(interactive, 'json'));
            else if (type === 'faqs') new Faqs(interactive, Newsroom.parameter(interactive, 'menuImage'), Newsroom.parameter(interactive, 'json'));
            else if (type === 'bullets') new Bullets(interactive, Newsroom.parameter(interactive, 'color'), Newsroom.parameter(interactive, 'title'), Newsroom.parameter(interactive, 'json'));
            else console.warn('Newsroom Interactives: There was no type set for the interactive.');
        }
    },
    rapid: function () {
        // append
        this.a = function (container, elem) {
            container.appendChild(elem);
        }
        // create 
        this.c = function (elems, text) {
            var elem = null;
            if (Array.isArray(elems)) {
                var container = document.createElement(elems[0]);
                for (var x = 1; x < elems.length; x++) {
                    var elem = document.createElement(elems[x]);
                    container.appendChild(elem);
                }
                return container;
            } else {
                var elem = document.createElement(elems);
                if (text) elem.innerHTML = text;
                return elem;
            }
        }
        // each
        this.e = function (array, callback) {
            for (var x = 0; x < array.length; x++) {
                callback(array[x]);
            }
        }
    }
}