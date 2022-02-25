import {Cliente} from "../Cliente.js"
import {Gerente} from "./Gerente.js"
import {Diretor} from "./Diretor.js"
import {SistemaAutenticacao} from "../SistemaAutenticacao.js"

const diretor = new Diretor("Pedro", 10000, 12345678900);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Rodrigo", 5000, 11122233344);
gerente.cadastrarSenha("123")

const estaLogado = SistemaAutenticacao.login(gerente, "123");

console.log(estaLogado)
