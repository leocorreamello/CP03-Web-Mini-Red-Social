document.getElementById('btnPostar').addEventListener('click', function(postFeed) {
    postFeed.preventDefault();
    const postUsuario = document.getElementById('postUsuario').value;
    if(postUsuario === ''){
        alert('Digite pelo menos um texto para postar!');
        return;
    }else{
        const categoriaSelecionada = document.querySelector('#categorias').value;
        const fotoUm = document.querySelector("#urlFoto1").value;
        const fotoDois = document.querySelector("#urlFoto2").value;
        const fotoTres = document.querySelector("#urlFoto3").value;
        const fotos = [fotoUm, fotoDois, fotoTres];
        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString('pt-BR');
        const horaFormatada = agora.toLocaleTimeString('pt-BR');
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.style.textAlign = 'center';
        const postP = document.createElement('p');
        postP.id = 'feedPost';
        postP.style.marginTop = '1px';
        postP.style.marginBottom = '10px';
        postP.innerText = postUsuario;
        postDiv.appendChild(postP);
        if (fotos[0] !== '' || fotos[1] !== '' || fotos[2] !== '') {
            const imagemPost = document.createElement('img');
            imagemPost.src = fotos[0];
            imagemPost.style.borderRadius = '5px';
            let indiceAtual = 0;
            function proximaImagem() {
                indiceAtual++;
                if (indiceAtual >= fotos.length) {
                    indiceAtual = 0;
                }
                imagemPost.src = fotos[indiceAtual];
            }
            function imagemAnterior() {
                indiceAtual--;
                if (indiceAtual < 0) {
                    indiceAtual = fotos.length - 1;
                }
                imagemPost.src = fotos[indiceAtual];
            }
            imagemPost.style.width = '100%';
            imagemPost.style.height = 'auto';
            const contenedor = document.createElement('div');
            contenedor.style.position = 'relative';
            postDiv.appendChild(contenedor);
            contenedor.appendChild(imagemPost);
            const botaoProxima = document.createElement('button');
            botaoProxima.innerHTML = `<span class="material-symbols-outlined">chevron_right</span>`;
            botaoProxima.style.position = 'absolute';
            botaoProxima.style.right = '0';
            botaoProxima.style.top = '50%';
            botaoProxima.style.borderRadius = '5px';
            botaoProxima.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            botaoProxima.style.width = '40px';
            botaoProxima.addEventListener('click', proximaImagem);
            contenedor.appendChild(botaoProxima);
            const botaoAnterior = document.createElement('button');
            botaoAnterior.innerHTML = `<span class="material-symbols-outlined">chevron_left</span>`;
            botaoAnterior.style.position = 'absolute';
            botaoAnterior.style.left = '28.5%';
            botaoAnterior.style.top = '50%';
            botaoAnterior.style.borderRadius = '5px';
            botaoAnterior.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            botaoAnterior.style.width = '40px';
            botaoAnterior.addEventListener('click', imagemAnterior);
            contenedor.appendChild(botaoAnterior);
        }
        const categoriaP = document.createElement('p');
        categoriaP.id = 'feedCategoria';
        categoriaP.style.marginTop = '20px';
        categoriaP.style.marginBottom = '10px';
        categoriaP.innerText = `Categoria: ${categoriaSelecionada}`;
        postDiv.appendChild(categoriaP);
        const dataP = document.createElement('p');
        dataP.id = 'feedData';
        dataP.style.marginTop = '20px';
        dataP.style.marginBottom = '20px';
        dataP.innerText = `Data e Hora: ${dataFormatada + ' - ' + horaFormatada}`;
        postDiv.appendChild(dataP);
        var botoesDiv = document.createElement('div');
        botoesDiv.style.display = 'flex';
        botoesDiv.style.justifyContent = 'center';
        botoesDiv.style.marginTop = '10px';
        botoesDiv.style.marginBottom  = '20px';
        var apagarBtn = document.createElement('button');
        apagarBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>Apagar`;
        apagarBtn.style.fontSize = '20px';
        apagarBtn.style.marginLeft = '0%';
        apagarBtn.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja apagar este post?')){
                alert('Post apagado com sucesso!');
                postDiv.remove();
            }
        });
        botoesDiv.appendChild(apagarBtn);
        var editarBtn = document.createElement('button');
        editarBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>Editar`;
        editarBtn.style.fontSize = '20px';
        editarBtn.style.marginLeft = '5px';
        editarBtn.addEventListener('click', function() {
            var novoTexto = prompt('Digite o novo texto do post:', postP.innerText);
            if (novoTexto !== null) {
                if (novoTexto === '') {
                    alert('Digite pelo menos um texto para postar!');
                    return;
                }else{
                    postP.innerText = novoTexto;
                }
            }
        });
        botoesDiv.appendChild(editarBtn);
        postDiv.appendChild(botoesDiv);
        document.getElementById('options').addEventListener('change', function() {
            var categoriaSelecionada = this.value;
            var posts = document.getElementsByClassName('post');
            for (var i = 0; i < posts.length; i++) {
                var post = posts[i];
                var categoriaPost = post.querySelector('#feedCategoria').innerText.split(': ')[1];
                if (categoriaSelecionada === 'Todos'){
                    post.style.display = 'block';
                }else if (categoriaPost !== categoriaSelecionada){
                    post.style.display = 'none';
                }else {
                    post.style.display = 'block';
                }
            }
        });
        document.querySelector('.posts').appendChild(postDiv);
        document.getElementById('postUsuario').value = '';
        document.getElementById('categorias').value = 'Todos';
        document.getElementById('urlFoto1').value = '';
        document.getElementById('urlFoto2').value = '';
        document.getElementById('urlFoto3').value = '';
    }
});