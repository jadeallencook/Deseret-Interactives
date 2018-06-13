export default function LineGraph(container) {
    Newsroom.ajax('../src/json/suicide-rate.json').then(function (response) {

        // setup interactive
        var R = new Newsroom.rapid;
        container.classList.add('inline');

        // insert titles
        R.a(container, R.c('h2', response.title));
        R.a(container, R.c('span', response.description));

        // create graph
        var graph = R.c('div#graph');
        var min, max;
        R.e(response.lines, function (line) {
            var tempMin = R.min(line.values);
            var tempMax = R.max(line.values);
            if (tempMin < min || !min) min = tempMin;
            if (tempMax > max || !max) max = tempMax;
        });
        
        min = Math.floor(min);
        max = Math.ceil(max);
        var rows = (max - min) + 1;
        if (response.increment) rows = Math.round(rows / response.increment);
        R.e(rows, function (num) {
            var row = R.c('div.row');
            num = num * response.increment;
            R.a(row, R.c('div.value', num))
            row.setAttribute('id', 'row-' + num);
            var years = ((response.years.end - (response.years.start - 1)) / response.years.increment);
            R.e(years, function(year) {
                year = (response.years.start + (year * response.years.increment)) - 1;
                var column;
                if (num === min) column = R.c('div.year-label', '\'' + year.toString().slice(2, 4));
                else column = R.c('div.year');
                column.style.width = Math.floor(98 / years) + '%';
                R.a(row, column);
            });
            R.a(graph, row);
        })
        R.a(container, graph);

        // insert values into graph
        R.e(response.lines, function(line) {
            console.log(line);
            var num = 0;
            R.e(line.values, function(value) {
                var dot = R.c('div.dot');
                dot.setAttribute('data-value', value);
                var row = Math.floor((Math.floor(value) / response.increment)) * response.increment;
                var elem = document.getElementById('row-' + row).childNodes[num + 1];
                console.log(elem);
                if (line.color) dot.style.backgroundColor = line.color;
                R.a(elem, dot);
                num++;
            })
        });

        // footer
        R.a(container, R.c('span', response.footer));
    });
}