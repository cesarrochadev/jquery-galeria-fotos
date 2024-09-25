$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown();
    })
    $('#btn_cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco-image-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overLay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem">Ver imagem </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-image-nova').val('');
    })
})