document.getElementById('btnPostar').addEventListener('click', function(postFeed) {
    //Previne o comportamento padrão do botão
    postFeed.preventDefault();
    const postUsuario = document.getElementById('postUsuario').value;

    //Verifica se o usuário digitou algo
    if(postUsuario === ''){
        alert('Digite pelo menos um texto para postar!');
        return;
    }else{
        //Pega a categoria selecionada
        const categoriaSelecionada = document.querySelector('#categorias').value;
        const fotoUm = document.querySelector("#urlFoto1").value;
        const fotoDois = document.querySelector("#urlFoto2").value;
        const fotoTres = document.querySelector("#urlFoto3").value;
        const fotos = [fotoUm, fotoDois, fotoTres];

        //Pega a data e hora atual
        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString('pt-BR');
        const horaFormatada = agora.toLocaleTimeString('pt-BR');

        //Cria o post
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.style.textAlign = 'center';

        //Adiciona o post do usuário
        const postP = document.createElement('p');
        postP.id = 'feedPost';
        postP.style.marginTop = '1px';
        postP.style.marginBottom = '10px';
        postP.innerText = postUsuario;
        postDiv.appendChild(postP);

        //Adiciona a imagem do post
        if (fotos[0] !== '' || fotos[1] !== '' || fotos[2] !== '') {
            const imagemPost = document.createElement('img');
            imagemPost.src = fotos[0];
            let indiceAtual = 0;
            function proximaImagem() {
                // Incrementa o índice atual
                indiceAtual++;
                if (indiceAtual >= fotos.length) {
                    indiceAtual = 0;
                }
                // Atualiza a imagem do post
                imagemPost.src = fotos[indiceAtual];
            }
            imagemPost.style.width = '100%';
            imagemPost.style.height = 'auto';
            postDiv.appendChild(imagemPost);
        }

        // Cria o botão
        const botao = document.createElement('button');
        botao.innerText = 'Próxima imagem';
        botao.style.display = 'block'; // Faz o botão ocupar toda a linha
        botao.style.margin = 'auto'; // Centraliza o botão na linha

        // Adiciona um ouvinte de eventos ao botão para mudar a imagem quando for clicado
        botao.addEventListener('click', proximaImagem);

        // Adiciona o botão ao postDiv
        postDiv.appendChild(botao);

        //Adiciona a categoria
        const categoriaP = document.createElement('p');
        categoriaP.id = 'feedCategoria';
        categoriaP.style.marginTop = '20px';
        categoriaP.style.marginBottom = '10px';
        categoriaP.innerText = `Categoria: ${categoriaSelecionada}`;
        postDiv.appendChild(categoriaP);

        //Adiciona a data e hora
        const dataP = document.createElement('p');
        dataP.id = 'feedData';
        dataP.style.marginTop = '20px';
        dataP.style.marginBottom = '20px';
        dataP.innerText = `Data e Hora: ${dataFormatada + ' - ' + horaFormatada}`;
        postDiv.appendChild(dataP);

        // Cria a div que vai conter os botões
        var botoesDiv = document.createElement('div');
        botoesDiv.style.display = 'flex';
        botoesDiv.style.justifyContent = 'center';
        botoesDiv.style.marginTop = '10px';
        botoesDiv.style.marginBottom  = '20px';

        // Cria o botão de apagar
        var apagarBtn = document.createElement('button');
        apagarBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>Apagar`;
        apagarBtn.style.fontSize = '20px';
        apagarBtn.style.marginLeft = '0%';
        apagarBtn.addEventListener('click', function() {
            postDiv.remove();
        });
        botoesDiv.appendChild(apagarBtn);

        // Cria o botão de editar
        var editarBtn = document.createElement('button');
        editarBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>Editar`;
        editarBtn.style.fontSize = '20px';
        editarBtn.style.marginLeft = '5px';
        editarBtn.addEventListener('click', function() {
            var novoTexto = prompt('Digite o novo texto do post:');
            if (novoTexto !== null) {
                // Verifica se o usuário digitou algo
                if (novoTexto === '') {
                    alert('Digite pelo menos um texto para postar!');
                    return;
                }else{
                    postP.innerText = novoTexto;
                }
            }
        });
        botoesDiv.appendChild(editarBtn);
        
        // Adiciona a div de botões ao post
        postDiv.appendChild(botoesDiv);

        // Filtrando post apenas de acordo com o select
        document.getElementById('options').addEventListener('change', function() {
            var categoriaSelecionada = this.value;
        
            // Obtém todos os posts
            var posts = document.getElementsByClassName('post');
        
            // Itera sobre todos os posts
            for (var i = 0; i < posts.length; i++) {
                var post = posts[i];
        
                // Obtém a categoria do post
                var categoriaPost = post.querySelector('#feedCategoria').innerText.split(': ')[1];
        
                // Se a categoria do post não corresponder à categoria selecionada, esconde o post
                // Caso contrário, mostra o post
                if (categoriaSelecionada === 'Todos'){
                    post.style.display = 'block';
                }else if (categoriaPost !== categoriaSelecionada){
                    post.style.display = 'none';
                }else {
                    post.style.display = 'block';
                }
            }
        });

        // Cria o carousel
        

        //Adiciona o post criado acima ao feed
        document.querySelector('.posts').appendChild(postDiv);

        // Limpa os inputs
        document.getElementById('postUsuario').value = '';
        document.getElementById('categorias').value = 'Todos';
        document.getElementById('urlFoto1').value = '';
        document.getElementById('urlFoto2').value = '';
        document.getElementById('urlFoto3').value = '';
    }
});