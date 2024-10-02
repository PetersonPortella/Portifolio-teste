function Clicar() {

    if (document.body.style.background === "rgb(239, 157, 16)" || document.body.style.background === "") {
        document.body.style.background = "#143d59";
        document.body.style.color = "white"; 
        document.querySelector("header").style.background = "#ef9d10";
        document.querySelector("header").style.color = "black"; 

       // Dentro da função Clicar, depois de mudar a cor de fundo e a cor do cabeçalho, usamos localStorage.setItem para salvar a cor do fundo e a cor do cabeçalho.

        localStorage.setItem('backgroundColor', "#143d59");
        localStorage.setItem('headerColor', "#ef9d10");

    } else {
        document.body.style.background = "#ef9d10"; 
        document.body.style.color = "black";
        document.querySelector("header").style.background = "#143d59";

        // Salvar a cor no armazenamento local  
        localStorage.setItem('backgroundColor', "#ef9d10");
        localStorage.setItem('headerColor', "#143d59");
    }
}


//A função window.onload é utilizada para recuperar as cores do armazenamento local assim que a página é carregada. 
//Se as cores estiverem salvas, elas são aplicadas ao corpo e ao cabeçalho.
// Recuperar as cores do armazenamento local ao carregar a página
//fazer e estudar essas aqui
window.onload = function() {
    const telaOriginal = localStorage.getItem('backgroundColor');
    const cabeca = localStorage.getItem('headerColor');

    if (telaOriginal) {
        document.body.style.background = telaOriginal;
    }

    if (cabeca) {
        document.querySelector("header").style.background = cabeca;
    }
}
