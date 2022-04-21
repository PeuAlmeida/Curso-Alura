export class Funcionario {

    constructor() {
        this._nome;
        this._cpf;
        this._salario;
        this._senha;

        this._bonificacao = 1;

    }
    
    autenticar(senha) {
        return senha == this._senha
    } 

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}