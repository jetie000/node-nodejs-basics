import { promises } from 'fs';

const rename = async () => {
    const filePath = './src/fs/files/wrongFilename.txt';
    const newFilePath = './src/fs/files/properFilename.md';
    try {
        await promises.open(filePath);
        const newFile = await promises.open(newFilePath);
        if (newFile) {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        if (error.code === 'ENOENT' && error.path.includes('properFilename.md')) {
            await promises.rename(filePath, newFilePath);
            return;
        }
    }
    throw new Error('FS operation failed');
};

await rename();
