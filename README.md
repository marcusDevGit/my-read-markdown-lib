# 📚 My Read Markdown Lib

Bem-vindo ao **My Read Markdown Lib**! Este projeto é uma biblioteca para leitura e extração de links de arquivos Markdown. 🚀

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- **Node.js**: Ambiente de execução JavaScript.
- **Chalk**: Para estilizar mensagens no terminal.
- **Node Fetch**: Para validação de URLs.
- **Jest**: Framework de testes.
- **Babel**: Para compatibilidade com diferentes versões do JavaScript.

## 📂 Estrutura do Projeto

├── arq/ │ └── texto1.md ├── test/ │ ├── arq/ │ │ ├── texto1.md │ │ └── texto02.md │ └── index.test.js ├── cli.js ├── http-validation.js ├── index.js ├── package.json ├── babel.config.js ├── jest.config.js └── README.md

## ⚙️ Como Funciona

1. **Leitura de Arquivos Markdown**: A biblioteca lê arquivos Markdown e extrai os links presentes no conteúdo.
2. **Validação de Links**: Opcionalmente, você pode validar os links extraídos para verificar se estão acessíveis.

## 🚀 Como Usar

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/my-read-markdown-lib.git

    cd my-read-markdown-lib
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
3. Executando o CLI
   Para extrair links de um arquivo Markdown:

   ```bash
   npm run cli [texto1.md](http://_vscodecontentref_/11)
   ```

   Para extrair e validar os links:

   ```bash
   npm run cli [texto1.md](http://_vscodecontentref_/12) validate
   ```

4. Executando os Testes
   Para rodar os testes:

   ```bash
   npm run test
   ```

### 🧪 Exemplos

Entrada (arquivo Markdown):

    ```markdown
    [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)
    ```

Saída:

    ```markdown
    [
        {"FileList": "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"}
    ]
    ```

📝 Licença
Este projeto está sob a licença ISC.

Feito com ❤️ por Marcus. 😊
