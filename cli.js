import chalk from 'chalk';
import pegarFile from './index.js';
import urlsVaditation from './http-validation.js'

const path = process.argv;

async function processText(pathFile) {
    const result = await pegarFile(pathFile[2]);
    if (path[3] === 'validate') {
        console.log(chalk.blue('Lista de links validados'), await urlsVaditation(result));
    } else {
        console.log(chalk.yellow('Lista de links'), result);

    }
}

processText(path);