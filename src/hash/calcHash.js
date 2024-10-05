import { createHash } from 'node:crypto';
import fs from 'node:fs';

const calculateHash = async () => {
    const hash = createHash('sha256');

    const stream = fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt');

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        const result = hash.digest('hex');
        console.log(result);
    });
};

await calculateHash();
