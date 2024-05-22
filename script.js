//Pega o botão de postar e adiciona um evento de click
document.getElementById('btnPostar').addEventListener('click', function(postFeed) {

    //Mostra o text do post no Feed
    postFeed.preventDefault();
    const postUsuario = document.getElementById('postUsuario').value;
    document.getElementById('feedPost').innerText = postUsuario;

    //Verifica se o campo de postagem está vazio
    if(postUsuario === ''){
        //Mostra um alerta se o campo de text estiver vazio
        alert('Digite pelo menos um texto para postar!');
        return;
    }else{
        //Mostra a categoria do post no Feed
        const categoriaSelecionada = document.querySelector('#categorias').value;
        document.querySelector('#feedCategoria').innerText = `Categoria: ${categoriaSelecionada}`;

        //Mostra a data e hora do post no Feed
        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString('pt-BR');
        const horaFormatada = agora.toLocaleTimeString('pt-BR');
        document.getElementById('feedData').innerText = `Data e Hora: ${dataFormatada + ' - ' + horaFormatada}`;
    }
    
});
