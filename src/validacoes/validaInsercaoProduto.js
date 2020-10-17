/*******Constantes comuns*******/
const QUEBRAR_LINHA = '\n'

/*******Constantes de erro de cadastro*******/
const ADDPRODUTO_IMAGEM_OBRIGATORIA     = '❌- Favor selecione uma imagem para o produto!'
const ADDPRODUTO_NOME_OBRIGATORIO       = '❌- Nome obrigatório!'
const ADDPRODUTO_PRECO_OBRIGATORIO      = '❌- Favor informe o preço do produto!'
const ADDPRODUTO_CATEGORIA_OBRIGATORA   = '❌- Favor selecione uma categoria!'

export default class validaInsercaoProduto {

    Validate(produto) {
        var validacao = new ValidateRegistro();
        validacao.validarImagem(produto.image)
        validacao.validarNome(produto.nomeProduto)
        validacao.validarPreco(produto.preco)
        validacao.validarCategoria(produto.telefone)
        
        return validacao.getMensagemErro();
    }
}

class ValidateRegistro {

    mensagensErrosRegistro = '';

    validarImagem(imagem){
        if (imagem == null || imagem == ''){
            this.concatenar(ADDPRODUTO_IMAGEM_OBRIGATORIA)
        }
    }

    validarNome(nome) {
        if (nome == null || nome == ''){
            this.concatenar(ADDPRODUTO_NOME_OBRIGATORIO)
        }
    }

    validarPreco(preco) {
        if (preco == null || preco == ''){
            this.concatenar(ADDPRODUTO_PRECO_OBRIGATORIO)
        }
    }

    validarCategoria(categoria) {
        if (categoria == null || categoria == '' || categoria == 'n/a'){
            this.concatenar(ADDPRODUTO_CATEGORIA_OBRIGATORA)
        }
    }

    concatenar(str) {
        this.mensagensErrosRegistro = String.prototype.concat(this.mensagensErrosRegistro, QUEBRAR_LINHA, str);
    }

    getMensagemErro() {
        return this.mensagensErrosRegistro;
    }
}
