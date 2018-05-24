// import new interactives here
import List from './list.js';
import Timeline from './timeline.js'

window.Newsroom = {
    parameter: function(interactive, parameter) {
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
            console.warn('Newsroom Interactives: There was no type set for the interactive.');
        }
    }
}