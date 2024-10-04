import { promises } from 'node:fs';

const remove = async () => {
    try {
        await promises.unlink('./src/fs/files/fileToRemove.txt');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await remove();
