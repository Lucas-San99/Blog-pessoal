function mostrarPerfil() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let conteudo = JSON.parse(this.responseText);
        let exibirPerfil = `<div class="container">
                                <div class="card" style="width: 100%; border:none;">
                                    <img src="${conteudo.avatar_url}" id="fotoPerfil" style="max-width:240px; display: inline;" alt="Foto-Perfil">
                                    <div class="card-body" style="display: inline-block;">
                                        <h1 id="titNnome">${conteudo.name}</h1>
                                        <h2 id="titLogin">${conteudo.login}</h2>
                                        <p id="presentation" style="font-size:25px;">${conteudo.bio}</p>
                                        <a href="${conteudo.html_url}" target="_blank" class="btn btn-primary">Vá ao Github</a>

                                        <h4>Redes Sociais</h4>
                                        <a href="https://www.linkedin.com/in/lucas-santos5668/" target="_blank"><img
                                                src="https://image.flaticon.com/icons/png/128/1051/1051384.png"
                                                class="media-object  img-responsive img-thumbnail" style="max-width: 50px; display: inline;"
                                                alt="logoLinkedin"></a>
                                        <a href="https://www.instagram.com/luks.san99/" target="_blank"><img
                                                src="https://image.flaticon.com/icons/png/128/1177/1177585.png" 
                                                class="media-object  img-responsive img-thumbnail"
                                                style="max-width: 50px; display: inline; margin: 5px 5px" alt="logoInstagram"></a>
                                    </div>
                                </div>
                            </div>`;
        document.getElementById('introducao').innerHTML = exibirPerfil;
    }
    xhr.open('GET', 'https://api.github.com/users/Lucas-San99');
    xhr.send();
}

(function barraPesquisa() {
    const busca = document.getElementById("busca");
    const perfil = document.getElementById("perfil");
    const url = "https://api.github.com/users";
    const client_id = "Iv1.983aa6a2deb7f9b3";
    const client_secret = "babc3d7d9c97f3a4a3b21b70e09c15d5dcffb97f";

    async function procurarUsuario(usuario) {
        const retornoDePerfil = await fetch(`${url}/${usuario}?client_id=${client_id}&client_secret=${client_secret}`);
        const perfil = retornoDePerfil.json();
        return perfil;

    }
    function mostrarUsuario(usuario) {
        perfil.innerHTML`<div class="row">
                            <div class="col-md-4">
                                <div class="card" style="width: 18rem;">
                                    <img src="${usuario.avatar_url}" alt="" class="card-img-top">
                                    <ul class="list-group-flush">
                                        <li class="list-group-item">Repositórios: <span class="badge">${usuario.public_repos}</span></li>
                                        <li class="list-group-item">Seguidores: <span class="badge">${usuario.followers}</span></li>
                                        <li class="list-group-item">Seguindo: <span class="badge">${usuario.following}</span></li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="${usuario.html_url}" target="_blank" 'class="btn btn-warning btnblock">Ver Perfil</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    }

    busca.addEventListener("keyUp", e => {
        const usuario = e.target.value;
        if (usuario.length > 0) {
            procurarUsuario(usuario).then(res => mostrarUsuario(res));
        }

    })
})();
