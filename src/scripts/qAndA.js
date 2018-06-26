export default function QAndA(container, background, json) {
    var R = new Newsroom.rapid;
    R.a(container, R.c('h1', 'Loading...'));
    container.classList.add('inline');
    Newsroom.ajax(json).then(function (sections) {
        container.innerHTML = null;
    }).catch(function () {
        container.innerHTML = null;
        R.a(container, R.c('h1', 'Loading...'));
    });
}