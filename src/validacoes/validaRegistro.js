/*******Constantes comuns*******/
const QUEBRAR_LINHA = '\n'

/*******Constantes de erro de cadastro*******/
const REGISTRO_NOME_OBRIGATORIO = 'Nome obrigatório!'
const REGISTRO_EMAIL_INVALIDO = 'Endereço de e-mail inválido!'
const REGISTRO_SENHA_MUITO_CURTA = 'Senha deve possuir 8 ou mais caracteres!'
const REGISTRO_SENHAS_DIFERENTES = 'Senhas não combinam!'

/*******Constantes de erro de login*******/

export default class validaRegistro {

    Validate(user) {
        var validacao = new ValidateRegistro();
        validacao.validarNome(user.nome)
        validacao.validarEmail(user.email)
        validacao.validarSenha(user.password, user.passwordConfirmacao)
        
        return validacao.getMensagemErro();
    }
}

class ValidateRegistro {

    mensagensErrosRegistro = '';

    validarNome(nome) {
        if (nome == null || nome == ''){
            this.concatenar(REGISTRO_NOME_OBRIGATORIO)
        }
    }

    validarEmail(email) {
        if (email == null || email == ''){
            this.concatenar(REGISTRO_EMAIL_INVALIDO)
        }
    }

    validarSenha(senha, senhaConfirmacao) {
        if (senha == null || senha.length < 8){
            this.concatenar(REGISTRO_SENHA_MUITO_CURTA)
        }
        if (senha != senhaConfirmacao){
            this.concatenar(REGISTRO_SENHAS_DIFERENTES)
        }
    }

    concatenar(str) {
        this.mensagensErrosRegistro = String.prototype.concat(this.mensagensErrosRegistro, QUEBRAR_LINHA, str);
    }

    getMensagemErro() {
        return this.mensagensErrosRegistro;
    }
}
