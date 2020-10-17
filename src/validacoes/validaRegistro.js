/*******Constantes comuns*******/
const QUEBRAR_LINHA = '\n'

/*******Constantes de erro de cadastro*******/
const REGISTRO_NOME_OBRIGATORIO       = '❌- Nome obrigatório!'
const REGISTRO_EMAIL_INVALIDO         = '❌- Endereço de e-mail inválido!'
const REGISTRO_SENHA_MUITO_CURTA      = '❌- Senha deve possuir 8 ou mais caracteres!'
const REGISTRO_SENHAS_DIFERENTES      = '❌- Senhas não combinam!'
const REGISTRO_IMAGEM_OBRIGATORIA     = '❌- Favor selecione uma imagem para perfil!'
const REGISTRO_TELEFONE_INVALIDO      = '❌- Favor informar um telefone válido!'
const REGISTRO_FORMATO_TELEFONE_CERTO = '❌- O formato do telefone deve ser 021970707070'

export default class validaRegistro {

    Validate(user) {
        var validacao = new ValidateRegistro();
        validacao.validarImagem(user.image, user.isImageDefault)
        validacao.validarNome(user.nome)
        validacao.validarEmail(user.email)
        validacao.validarTelefone(user.telefone)
        validacao.validarSenha(user.password, user.passwordConfirmacao)
        
        return validacao.getMensagemErro();
    }
}

class ValidateRegistro {

    mensagensErrosRegistro = '';

    validarImagem(imagem, isImageDefault){
        if (imagem == null || imagem == '' || isImageDefault){
            this.concatenar(REGISTRO_IMAGEM_OBRIGATORIA)
        }
    }

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

    validarTelefone(telefone) {
        if (telefone == null || telefone == '' || telefone.length != 12){
            this.concatenar(REGISTRO_TELEFONE_INVALIDO)
            this.concatenar(REGISTRO_FORMATO_TELEFONE_CERTO)
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
