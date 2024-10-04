import { promises } from 'node:fs';

const create = async () => {
    const freshFilePath = './src/fs/files/fresh.txt';
    try {
        await promises.open(freshFilePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await promises.writeFile(freshFilePath, 'I am fresh and young');
            return;
        }
    }
    throw new Error('FS operation failed');
};

await create();
