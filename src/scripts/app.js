import List from './list.js';

window.Newsroom = {
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
            else if (type === 'list') new List(interactive, interactive.getAttribute('data-src'), interactive.getAttribute('data-style'));
        }
    }
}