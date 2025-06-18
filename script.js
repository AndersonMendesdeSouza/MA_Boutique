
// const categoria = document.getElementById("categoria")

// categoria.addEventListener("change", function(){
//     const Categoria = this.value;
    
//     const procurar = document.getElementById(Categoria)

// if (procurar) {
//     procurar.scrollIntoView({ behavior: 'smooth' })};
// })

 


const Section = document.getElementById("categoria")
Section.addEventListener("change", function(){
    const valorSelect = this.value;
   const lugarHtml = document.getElementById(valorSelect)

   if(lugarHtml){
    lugarHtml.scrollIntoView({behavior: 'smooth'} )
   }
})