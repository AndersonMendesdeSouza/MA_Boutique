
const categoria = document.getElementById("categoria")

categoria.addEventListener("change", function(){
    const Categoria = this.value;
    
    const procurar = document.getElementById(Categoria)

if (procurar) {
    procurar.scrollIntoView({ behavior: 'smooth' })};
   
    setTimeout(() => {
        categoria.selectedIndex = 0
    }, 2000);
})

 

 