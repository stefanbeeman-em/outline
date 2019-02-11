import fs from 'fs';
import { sortScores } from './index';

test('It provides valid ouput when provided valid input', () => {
    const sample = JSON.parse(String(fs.readFileSync('./output.txt')));
    const output = sortScores('./data.txt', 5);
    expect(output).toBe(JSON.stringify(sample));
});
