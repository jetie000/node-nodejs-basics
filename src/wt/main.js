import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const cpuCount = os.cpus().length;
    const results = [];

    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker('./src/wt/worker.js', { workerData: i + 10 });
        worker.on('message', (result) => {
            results.push({ status: 'resolved', data: result });

            if (results.length === cpuCount) {
                console.log(results);
            }
        })
        worker.on("error", () => {
            results.push({ status: 'resolved', data: null });
        });
    }
};

await performCalculations();
