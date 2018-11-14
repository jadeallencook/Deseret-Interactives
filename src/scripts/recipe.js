export default function Recipe(container, json) {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet">';
    document.head.innerHTML += '<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" rel="stylesheet">';
    var R = new Newsroom.rapid;
    R.a(container, R.c('span', 'Cooking up a recipe...'));
    container.classList.add('inline');
    Newsroom.ajax(json).then(function (recipe) {
        var title = R.c('span', recipe.title);
        title.classList.add('title');

        var app = {
            page: 'overview',
            clear: function () {
                container.innerHTML = null;
                R.a(container, title);
            },
            write: function (html) {
                var line = R.c('span', html);
                line.classList.add('line');
                line.classList.add('animated');
                line.classList.add('slideInLeft');
                R.a(container, line);
            },
            overview: function () {
                app.corner('ingredients');
                var time = (recipe.time >= 60 && (recipe.time % 60) === 0) ? ((recipe.time / 60) + ' hours') : (recipe.time + ' minutes');
                time = ((recipe.time / 60) === 1 && (recipe.time % 60) === 0) ? time.replace('s', '') : time;
                app.write('<span class="center">By ' + recipe.author + '</span>');
                app.write('<i>Serves ' + recipe.serves + ' and takes ' + time + '</i>');
            },
            ingredients: function () {
                app.corner(0);
                R.e(recipe.ingredients, function (ingredient) {
                    var html = (ingredient.amount) ? ('<span class="amount">' + ingredient.amount + '</span> of ' + ingredient.ingredient) : ingredient.ingredient;
                    app.write(html);
                });
            },
            corner(next) {
                var corner = R.c('div');
                corner.classList.add('corner');
                R.a(container, corner);
                corner.onclick = function () {
                    var elems = document.querySelectorAll('.line');
                    for (var x = 0, max = elems.length; x < max; x++) {
                        var elem = elems[x];
                        elem.classList.add('slideOutLeft');
                    }
                    setTimeout(function() {
                        if (Number.isInteger(next)) {
                            app.step(next);
                        } else {
                            app.page = next
                            app.render();
                        }
                    }, 750);
                }
                app.write(null);
                app.write('<span class="corner-msg">Click the corner to continue...</span>');
            },
            step: function (num) {
                app.clear();
                var text = ('Step ' + (num + 1) + '/' + recipe.steps.length);
                if ((num + 1) < recipe.steps.length) {
                    app.corner((num + 1), text);
                } else {
                    app.corner('overview', text);
                }
                var step = recipe.steps[num];
                app.write('<b>Step ' + (num + 1) + '/' + recipe.steps.length + '</b> ');
                app.write(null);
                app.write(step);
            },
            render: function () {
                app.clear();
                app[app.page]();
            }
        }
        app.render();
    });
}