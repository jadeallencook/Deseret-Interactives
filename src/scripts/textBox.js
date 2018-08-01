export default function TextBox(container, header, image, json, color) {

    var R = new Newsroom.rapid;

    container.classList.add('inline');
    R.a(container, R.c('h1', 'Loading...'));
    container.style.backgroundColor = color;

    Newsroom.ajax(json).then(function(json) {
        container.innerHTML = '';
        var imageElem = R.c('img');
        imageElem.src = image;
        R.a(container, imageElem);
        R.a(container, R.c('h2', header));
        for (var x = 0; x < json.length; x++) {
            var section = json[x];
            R.a(container, R.c('b', section.bullet + ': '));
            R.a(container, R.c('span', section.text));
            container.innerHTML += '<br /><br />';
        }
    }).catch(function() {
        container.innerHTML = 'Failed to load...';
    });

}