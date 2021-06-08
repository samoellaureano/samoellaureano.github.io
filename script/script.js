var _AlturaDocumento = 0;

$(document).ready(function () {
    _AlturaDocumento = window.innerHeight;
    $('.icone-scroll').click(ScrollSecao); //chama a função na ação de click no ícone
    $(AlturaSecao);
});

function AlturaSecao() {
    $('.secao').height(_AlturaDocumento); //atribui o valor da variável a todas as divs com a classe secao
}



function ScrollSecao() {
    var body = $('html, body');
    if ($(this).parent(".secao").is("#sessao-01")) {
        body.animate({ scrollTop: _AlturaDocumento }, "500");
    } else if ($(this).parent(".secao").is("#sessao-02")) {
        body.animate({ scrollTop: _AlturaDocumento * 2 }, "500");
    } else if ($(this).parent(".secao").is("#sessao-03")) {
        body.animate({ scrollTop: _AlturaDocumento * 3 }, "500");
    } else if ($(this).parent(".secao").is("#sessao-04")) {
        body.animate({ scrollTop: _AlturaDocumento * 4 }, "500");
    } else if ($(this).parent(".secao").is("#sessao-05")) {
        body.animate({ scrollTop: _AlturaDocumento * 5 }, "500");
    } else if ($(this).parent(".secao").is("#sessao-06")) {
        body.animate({ scrollTop: _AlturaDocumento * 6 }, "500");
    } else if ($(this).parent(".secao").is("#sessao-07")) {
        body.animate({ scrollTop: _AlturaDocumento * 7 }, "500");
    } else if ($(this).parent(".secao").is("#sessao-08")) {
        body.animate({ scrollTop: _AlturaDocumento * 8 }, "500");
    } else {
        body.animate({ scrollTop: 0 }, "800");
    }
}