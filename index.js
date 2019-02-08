const lineByLine = require('n-readlines')

export default function sortScores(filename, n) {
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
    output = output.sort((a, b) => { return a.score - b.score }).slice(n - 1).reverse();
    return JSON.stringify(output);
å}