
const container = document.getElementById("projetos");
const projetos = [
    {
        nome: "CalculadoraBasica",
        imagem: "Projetos/CalculadoraBasica/img/imageLogo.png",
        link: "Projetos/CalculadoraBasica/calculadoraBasica.html"
    },
    {
        nome: "SiteModelo",
        imagem: "Projetos/Site modelo/img/image.png",
        link: "Projetos/Site modelo/Modelo.html"
    }
];

projetos.forEach(projeto => {

    const card = document.createElement("div");
    card.classList.add("card");

    const imagem = `../Projetos/${projeto.pasta}/img/imagemProjeto.png`;
    const link = `../Projetos/${projeto.pasta}/${projeto.arquivo}`;

    card.innerHTML = `
        <a href="${link}">
            <img src="${imagem}" alt="${projeto.nome}">
            <p>${projeto.nome}</p>
        </a>
    `;

    container.appendChild(card);
});