import { promises } from 'node:fs';

const read = async () => {
    try {
        const data = await promises.readFile('./src/fs/files/fileToRead.txt');
        console.log(data.toString());
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await read();
