const pool = require('../config/database');

// Função para buscar investimentos
const getAllInvestimentos = async (req, res) => {

    try {
        const {rows} = await pool.query('SELECT * FROM investimento ORDER BY data_investimento DESC')
        res.status(200).json(rows);


    } catch (error) {
            console.error('Erro ao buscar o investimentos: ', error)
            res.status(500).json({ erro: 'Erro interno do servidor.'})
    }
}
// Função para criar investimentos
const createInvestimento = async (req, res) => {
    const {nome, tipo, valor_investido, data_investimento} = req.body;

            if(!nome || !tipo || !valor_investido || !data_investimento)
            {
                return res.status(400).json ({ erro: "Verifique se todos os campos foram preenchidos"})
            }

            try{
                const sql = 'INSERT INTO investimento(nome, tipo, valor_investido, data_investimento) VALUES ($1, $2, $3, $4) RETURNING  * '; // Usar $1 e não por nome diretamente evita ataque, pois o banco vai separar cada coluna do banco e analisar individualmente, se colasse Value 'nome' + restante poderia ter um DROP no lugar do nome e apagar toda minha tabela.
                const valores = [nome, tipo, valor_investido, data_investimento]

                const {rows} = await pool.query(sql, valores)
                res.status(201).json(rows[0])  // caso de certo mostra a  inserida
                console.log('Foi cadastrado')

            }catch (error){
                console.error('Erro ao cadastrar investimento', error);
                res.status(500).json({erro: 'Erro ao cadastrar investimento. Verifique os dados'}) // caso desrespeita as regras criadas no banco
            }
        }

// Função para atualizar investimentos
 const updateInvestimento = async (req, res) => {
    const {id} = req.params;
    const {nome, tipo, valor_investido, data_investimento} = req.body

    try{

        const sql =  'UPDATE investimento SET nome = $1, tipo = $2, valor_investido = $3, data_investimento = $4 WHERE id = $5 RETURNING *'

        const valor = [nome, tipo, valor_investido, data_investimento, id]

        const {rows, rowCount} =  await pool.query(sql, valor)

        if(rowCount === 0){

            return res.status(404).json({erro: 'Investimento não encontrado'})
        }

        res.status(200).json(rows[0]) // deu tudo certo
    }catch(error){
        console.error(' Erro ao autualizar investimento: ', error)
        res.status(500).json({erro: 'Erro ao atualizar investimento'})
    }


}

// Função para deletar investimentos
const deleteInvestimento = async (req, res) => {

    const {id} = req.params
    try{
        const {rowCount} = await pool.query('DELETE FROM investimento WHERE id = $1', [id])

        if(rowCount === 0){
            return res.status(404).json({ erro: 'Investimento não encontrado'})
        }

        res.status(204).send()
    }catch(error){
        console.error('Erro ao excluir investimento', error)
        res.status(500).json({erro: 'Erro ao excluir investimento'})
    }

    }



//exporta as funções
module.exports = {
    getAllInvestimentos,
    createInvestimento,
    updateInvestimento,
    deleteInvestimento,
};