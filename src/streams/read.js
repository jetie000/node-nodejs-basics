import fs from 'node:fs';

const read = async () => {
    const stream = fs.createReadStream('./src/streams/files/fileToRead.txt');
    stream.on('end', () => {
        process.stdout.write('\n\n');
    });

    stream.pipe(process.stdout);
};

await read();
