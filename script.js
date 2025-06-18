
const nomeClient=  prompt("Olá, seja bem-vindo-(a) á loja MA Boutique!\n Digite seu nome para personalizarmos sua experiência:")
 
const novidades = document.getElementById("vernovidades")

 
 

const olaclienteh2 = document.getElementById("nomeClienteHTML")

function formatarNome(nome) {
    return nome.trim().split(" ").map(palavra => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    }).join(" ");
}



if(nomeClient === null || nomeClient.trim() === ""){
    olaclienteh2.innerText = "!";   
    olaclienteh2.style.color = " #fff"
    olaclienteh2.style.fontSize = "28px"
    novidades.innerText = "Ver novidades"
}else{
olaclienteh2.innerText= " " + formatarNome(nomeClient) + "!";
novidades.innerText = `${formatarNome(nomeClient)}, confira as novidades! `
const categoria = document.getElementById("categoria")}

categoria.addEventListener("change", function(){
    const Categoria = this.value;
    
    const procurar = document.getElementById(Categoria)

if (procurar) {
    procurar.scrollIntoView({ behavior: 'smooth' })};
   
    setTimeout(() => {
        categoria.selectedIndex = 0
    }, 2000);
})

 

 