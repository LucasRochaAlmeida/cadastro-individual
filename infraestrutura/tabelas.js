// banco de dados

class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos 
            (id int NOT NULL AUTO_INCREMENT,
            solicitacao text,
            identificacao text, 
            assunto text, 
            detalhes text, 
            localizacao text, 
            lugar text,
            PRIMARY KEY (id) )`
        

        this.conexao.query( sql, erro => {
            if(erro){
                console.log(erro)
            } else{
                console.log('Tabela Atendimentos criada com sucesso')
            }
        } )
    }
}

module.exports = new Tabelas
