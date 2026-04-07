
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

    const imagem = `../DevLab/Projetos/${projeto.pasta}/img/imagemProjeto.png`;
    const link = `../DevLab/Projetos/${projeto.pasta}/${projeto.arquivo}`;

    card.innerHTML = `
        <a href="${link}">
            <img class=icone src="${imagem}" alt="${projeto.nome}">
            <p>${projeto.nome}</p>
        </a>
    `;

    container.appendChild(card);
});