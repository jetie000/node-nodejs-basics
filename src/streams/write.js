import fs from 'node:fs';

const write = async () => {
    console.log('Press Ctrl+C to finish\n');

    const stream = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(stream);
};

await write();
