var libs = '<script src="https://www.deseretnews.com/project/newsroom.min.js"></\script>\n';
libs += '<link rel="stylesheet" href="https://www.deseretnews.com/project/newsroom.min.css" />\n';
var interactives = {
	bullets: '<div class="interactive" data-type="bullets" data-color="#" data-title="#" data-json="#"></div>',
	faqs: '<div class="interactive" data-type="faqs" data-menuImage="#" data-json="#"></div>',
	navigational: '<div class="interactive" data-type="navigational" data-json="#"></div>',
    list: '<div class="interactive" data-type="list" data-src="#"></div>',
    timeline: '<div class="interactive" data-type="timeline" data-src="#" data-color="#" data-title="#" data-height="#"></div>'
}
var init = "\n<script>(function(){ Newsroom.init(); })();</script>";

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        elem.innerText = 'Successful!';
        setInterval(function () {
            elem.innerText = 'Copy Code';
        }, 2000)
    } catch (err) {
        elem.innerText = 'Error...';
        setInterval(function () {
            elem.innerText = 'Copy Code';
        }, 2000)
    }
    document.body.removeChild(textArea);
}

function copyCode(text, elem) {
    text = libs + interactives[text] + init;
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        elem.innerText = 'Successful!';
        setInterval(function () {
            elem.innerText = 'Copy Code';
        }, 2000)
    }, function (err) {
        elem.innerText = 'Error...';
        setInterval(function () {
            elem.innerText = 'Copy Code';
        }, 2000)
    });
}