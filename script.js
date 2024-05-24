document.getElementById('btnPostar').addEventListener('click', function(postFeed) {
    postFeed.preventDefault();
    const postUsuario = document.getElementById('postUsuario').value;

    if(postUsuario === ''){
        alert('Digite pelo menos um texto para postar!');
        return;
    }else{
        const categoriaSelecionada = document.querySelector('#categorias').value;

        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString('pt-BR');
        const horaFormatada = agora.toLocaleTimeString('pt-BR');

        var postDiv = document.createElement('div');
        postDiv.className = 'post';

        var postP = document.createElement('p');
        postP.id = 'feedPost';
        postP.style.marginTop = '1px';
        postP.innerText = postUsuario;
        postDiv.appendChild(postP);

        var categoriaP = document.createElement('p');
        categoriaP.id = 'feedCategoria';
        categoriaP.style.marginTop = '20px';
        categoriaP.style.marginBottom = '10px';
        categoriaP.innerText = `Categoria: ${categoriaSelecionada}`;
        postDiv.appendChild(categoriaP);

        var dataP = document.createElement('p');
        dataP.id = 'feedData';
        dataP.style.marginTop = '20px';
        dataP.style.marginBottom = '20px';
        dataP.innerText = `Data e Hora: ${dataFormatada + ' - ' + horaFormatada}`;
        postDiv.appendChild(dataP);

        document.querySelector('.posts').appendChild(postDiv);
    }
});