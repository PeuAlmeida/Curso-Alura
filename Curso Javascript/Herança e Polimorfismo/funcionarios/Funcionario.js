export class Funcionario {

    constructor() {
        this._nome;
        this._cpf;
        this._salario;
        this._senha;

        this._bonificacao = 1;

    }
    
    get senha () {
        return this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}