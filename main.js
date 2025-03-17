/**
 * Processo principal
 * Estudo do banco de dados MongoDB (CRUD)
 * @author Luiz Damas Amorim 
 */

// Importação do módulo de conexão
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados do cliente
const clienteModel = require('./src/models/Clientes.js')

// Função para cadastrar um novo cliente
// ATENÇÂO! Para trabalhar com banco de dados usar sempre async - await e try-catch
const salvarCliente = async (nomeCli, foneCli, cpfCli) => {
    try {
        //setar a estrutura de dados com os valores
        // obs: Usar os mesmos nomes da estrutura
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli
        }) 
        // A linha abaixo salva os dados no banco de dados
        await novoCliente.save()
        console.log("Cliente adicionado com sucesso")
    } catch (error) {
        console.log(error)
    }
}


// _____________________________________________________________

const iniciarSistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("--------------------------")
    await conectar()
    // CRUD create(insrção do banco de dados)
    await salvarCliente("Marlon Freitas", "55440-9503", "33548492003")
    await desconectar()
}

iniciarSistema()