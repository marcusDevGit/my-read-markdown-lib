import chalk from 'chalk';
import fs from 'fs';

function errorHandling(erro) {
    throw new Error(chalk.red(erro.code, 'Erro ao ler o arquivo'));
}

function extractLinks(data) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$=\s].[^\s]*)\)/gm;
    const arrayResult = [];
    let result;
    while ((result = regex.exec(data)) !== null) {
        arrayResult.push({
            [result[1]]:
                result[2],
        });
    }
    return arrayResult.length === 0 ? chalk.red('Nenhum link encontrado') : arrayResult;
}

//async/await
async function pegarFile(pathFile) {
    const encoding = 'utf8';
    try {
        const data = await fs.promises.readFile
            (pathFile, encoding);
        return extractLinks(data);
    }
    catch (erro) {
        errorHandling(erro);
    }
}

export default pegarFile;

