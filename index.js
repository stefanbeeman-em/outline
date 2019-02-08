const lineByLine = require('n-readlines')

export default function sortScores(filename, n) {
    const scoreLines = new lineByLine(filename);
    let output = [];
    let scoreLine;
    while (scoreLine = scoreLines.next()) {
        if (scoreLine) {
            let [ score, ...blob ] = String(scoreLine).split(': ');
            blob = blob.join(': ');
            console.log(blob);
            try {
                blob = JSON.parse(blob);
                if (blob && blob.id) {
                    output.push({ id: blob.id, score: parseInt(score) })
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
    output = output.sort((a, b) => { return a.score - b.score }).slice(1).slice(5);
    return JSON.stringify(output);
å}