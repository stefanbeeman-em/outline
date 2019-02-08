import fs from 'fs';
import target from './index';

test('It provides valid ouput when provided valid input', () => {
    const sample = JSON.parse(String(fs.readFileSync('./output.txt')));
    const output = target('./data.txt', 5);
    expect(output).toBe(JSON.stringify(sample));
});
