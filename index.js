const lineByLine = require('n-readlines')
const program = require('commander')

function sortScores(filename, n) {
    const scoreLines = new lineByLine(filename);
    let output = [];
    let scoreLine;
    while (scoreLine = scoreLines.next()) {
        if (scoreLine) {
            let [ score, ...blob ] = String(scoreLine).split(': ');
            blob = blob.join(': ');
            try {
                blob = JSON.parse(blob);
                if (blob && blob.id) {
                    output.push({ id: blob.id, score: parseInt(score) })
                }
            } catch (err) {
                return 2;
            }
        }
    }
    output = output.sort((a, b) => { return a.score - b.score }).slice(0, n).reverse();
    return JSON.stringify(output);
}

module.exports = { sortScores: sortScores };

program
    .version('0.1.0')
    .arguments('[path] [n]')
    .action((path, n) => {
        const output = sortScores(path, n);
        console.log(output);
    });

program.parse(process.argv);