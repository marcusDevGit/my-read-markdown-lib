import pathFile from '../index.js';
import chalk from 'chalk';

const resultArray = [
    { 
        FileList: `https://developer.mozilla.org/pt-BR/docs/Web/API/FileList`
    }
];

describe('pathFile::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pathFile).toBe('function');
    })
    
    it('Deve retornar um array de resultados', async () => {
        const result = await pathFile('F:/Projetos Node/my-read-markdown-lib/test/arq/texto1.md');
        expect(result).toEqual(resultArray);
    });

    it('Deve retornar msg de "Nenhum link encontrado"', async () => {
        const result = await pathFile('F:/Projetos Node/my-read-markdown-lib/test/arq/texto02.md');
        expect(result).toBe(chalk.red('Nenhum link encontrado'));
    })
});

