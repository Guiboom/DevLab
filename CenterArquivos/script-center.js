
const container = document.getElementById("projetos");
const projetos = [
    {
        nome: "Calculadora Básica",
        pasta: "CalculadoraBasica",
        arquivo: "calculadoraBasica.html"
    },
    {
        nome: "Site Modelo",
        pasta: "Site modelo",
        arquivo: "Modelo.html"
    },
    {
        nome: "Pomodoro Timer",
        pasta: "PomodoroTimer",
        arquivo: "PomodoroTimer.html"
    }
];

projetos.forEach(projeto => {

    const card = document.createElement("div");
    card.classList.add("card");

    /* Obs: para funcionar no live server, é necessario a alteração de diretorio para:
    `../Projetos/${projeto.pasta}/img/imagemProjeto.png`
    &
    `../Projetos/${projeto.pasta}/${projeto.arquivo}`
    Ele está assim para funcionar no Github Pages
    */

    const imagem = `Projetos/${projeto.pasta}/img/imagemProjeto.png`;
    const link = `Projetos/${projeto.pasta}/${projeto.arquivo}`;

    card.innerHTML = `
        <a href="${link}">
            <img class=icone src="${imagem}" alt="${projeto.nome}">
            <p>${projeto.nome}</p>
        </a>
    `;

    container.appendChild(card);
});