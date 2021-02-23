// banco de dados

class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos 
            (id int NOT NULL AUTO_INCREMENT,
            cpfDoCidadao text,
            nomeCompleto text, 
            dataDeNascimento text, 
            sexo text, 
            raca text, 
            etnia text,
            telefone text,
            email text,
            nomeCompletoMae text,
            nomeCompletoPai text,
            nacionalidade text,
            paisDeNascimento text,
            possuiDeficiencia text,
            possuiDeficiencia2 text,
            cep text,
            municipio text,
            uf text,
            bairro text,
            tipoLugradouro text,
            nomeLugradouro text,
            numeroCasa text,
            complemento text,
            situacaoMoradia text,
            localizacao text,
            homemResponsavel text,
            cpfHomemResponsavel text,
            telHomemResponsavel text,
            mulherResponsavel text,
            cpfMulherResponsavel text,
            telMulherResponsavel text,
            dataDeNaturalização text,
            portariaDeNaturalização text,
            municipioDeNaturalização text,
            dataDeEntrada text,
            relacaoDeParentesco text,
            ocupacao text,
            nivelEscolaridade text,
            trabalhaOuNao text,
            gestante text,
            ultimaMenstruacao text,
            peso text,
            fumante text,
            alcool text,
            drogas text,
            hipertensao text,
            diabetes text,
            avcDerrame text,
            infarto text,
            doencaCardiaca text,
            doencaCardiaca2 text,
            problemaRins text,
            problemaRins2 text,
            doencaRespiratoria text,
            doencaRespiratoria2 text,
            hanseniase text,
            tuberculose text,
            cancer text,
            internacaoRecente text,
            internacaoRecente2 text,
            diagnostico text,
            acamado text,
            domiciliado text,
            usoDePlantas text,
            usoDePlantas2 text,
            praticasIntegrativas text,
            outrasCondicoes text,
            confirmacaoDosDados text,
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
