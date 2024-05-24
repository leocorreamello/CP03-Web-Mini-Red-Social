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
        postP.innerText = postUsuario;
        postDiv.appendChild(postP);

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

        /* 
        var imagens = [document.getElementById('urlFoto1').value, document.getElementById('urlFoto2').value, document.getElementById('urlFoto3').value];
        var indiceAtual = 0;
        document.getElementById('carouselImg').src = imagens[indiceAtual];
        document.getElementById('prevBtn').addEventListener('click', function() {
            indiceAtual--;
            if (indiceAtual < 0) {
                indiceAtual = imagens.length - 1;
            }
            document.getElementById('carouselImg').src = imagens[indiceAtual];
        });
        document.getElementById('nextBtn').addEventListener('click', function() {
            indiceAtual++;
            if (indiceAtual >= imagens.length) {
                indiceAtual = 0;
            }
            document.getElementById('carouselImg').src = imagens[indiceAtual];
        }); 
        */

        //Adiciona o post criado acima ao feed
        document.querySelector('.posts').appendChild(postDiv);

        // Limpa os inputs
        document.getElementById('postUsuario').value = '';
        document.getElementById('categorias').value = 'Todos';
    }
});