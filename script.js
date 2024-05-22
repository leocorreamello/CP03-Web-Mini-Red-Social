document.getElementById('btnPostar').addEventListener('click', function(postFeed) {
    postFeed.preventDefault();
    const postUsuario = document.getElementById('postUsuario').value;
    document.getElementById('feedPost').innerText = postUsuario;

    const categoriaSelecionada = document.querySelector('#categorias').value;
    document.querySelector('#feedCategoria').innerText = `Categoria: ${categoriaSelecionada}`;

    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR');
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    document.getElementById('feedData').innerText =`Data e Hora: ${dataFormatada + ' - ' + horaFormatada}`;
}); 
