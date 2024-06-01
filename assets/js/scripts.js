let sobre = document.querySelector("#sobre");

async function getApiGithub() {
    try {

        const dadosperfil = await fetch("https://api.github.com/users/MariaBenitesJones");
        const perfil = await dadosperfil.json();

        let conteudo = ` <article class="bloco_2">
<div>
    <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">
</div>
<div class="quem_sou_eu">
    <h2>Quem sou eu?</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias explicabo iure sed quod
        ullam expedita, molestias possimus, officia eveniet temporibus et iusto voluptatum blanditiis
        est nisi ipsa nihil id.</p>
    <div class="git">
        <a class="button" href="${perfil.html_url}">GitHub</a>
        <p>${perfil.followers} Seguidores</p>
        <p>${perfil.public_repos} Repositórios</p>
    </div>
</div>
</article>`;

sobre.innerHTML += conteudo;

    } catch (error) {
        console.log(error);
    }
}

getApiGithub();
