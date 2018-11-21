export default function Quizlet(container, json) {
    var R = new Newsroom.rapid;
    R.a(container, R.c('h2', 'Loading...'));
    container.classList.add('inline');

    var app = {
        question: 0,
        answer: null
    }

    function clear() {
        container.innerHTML = null;
    }

    function select(selected) {
        var selector = selected.classList[0],
            elems = document.getElementsByClassName(selector);
        for (var x = 0, max = elems.length; x < max; x++) {
            var elem = elems[x];
            elem.classList.remove('selected');
        }
        selected.classList.add('selected');
    }

    function ask(title, question, answers) {
        var titleElem = R.c('h1.question-title', title),
            borderElem1 = R.c('hr.question-border'),
            borderElem2 = R.c('hr.question-border-small'),
            questionElem = R.c('h1.question-sub', question.text),
            submitElem = R.c('h1.question-submit', 'submit');
        clear();
        R.a(container, titleElem);
        R.a(container, borderElem1);
        R.a(container, borderElem2);
        R.a(container, questionElem);
        R.e(answers, function (answer) {
            var wrapper = R.c('div.question-wrapper'),
                bubble = R.c('div.question-bubble'),
                response = R.c('span.question-response', answer.text);
            bubble.onclick = function () {
                select(this);
            }
            R.a(wrapper, bubble);
            R.a(wrapper, response);
            R.a(container, wrapper);
        });
        submitElem.onclick = function () {
            console.log(true);
        }
        R.a(container, submitElem);
    }

    function answer(response, results, question) {

    }
    Newsroom.ajax(json).then(function (json) {
        ask(json.title, json.questions[0], json.responses);
    });
}