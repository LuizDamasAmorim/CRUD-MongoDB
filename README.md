# CRUD-MongoDB

Estudo e implementação de operações com MongoDB usando Node.js e Mongoose.  

## Estrutura do repositório

- `src/models/Clientes.js` — Definição do modelo de cliente (schema do Mongoose).
- `main.js` — Função principal que conecta ao banco, insere um cliente e desconecta.
- `database.js` — Configuração e conexão/desconexão com o MongoDB.
- `package.json` / `package-lock.json` — Gerenciamento de dependências do Node.js.
- `.gitignore` — Arquivos/pastas ignorados no Git.
- `README.md` — Documentação do projeto.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [MongoDB](https://www.mongodb.com/) em execução (local ou Atlas)
- Conexão com MongoDB configurada no arquivo `database.js`

## Como usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/LuizDamasAmorim/CRUD-MongoDB.git
    ```

2. Acesse o diretório:
    ```bash
    cd CRUD-MongoDB
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure a URI do MongoDB no arquivo `database.js`:
    ```javascript
    const url = 'mongodb+srv://usuario:senha@cluster.mongodb.net/nomedobanco'
    ```

5. Execute o projeto:
    ```bash
    node main.js
    ```

## Funcionalidades implementadas

- **Create**: Inserção de novos clientes no banco de dados.
