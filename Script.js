let $titulo = document.getElementById("title")
let $descricao = document.getElementById("description")
const btnGuardar = document.getElementById("btnGuardar")
const btnMostrar = document.getElementById("btnMostrar")

btnGuardar.addEventListener("click", (e)=>{
    e.preventDefault()
    if (!$titulo.value && !$descricao.value) {
        alert("Preencha os campos")
    } else {
        armazenarDados()
    }
})
function armazenarDados() {
    let dadosArmazenados = JSON.parse(localStorage.getItem('dados')) || [];
    const dados = {
        titulo: $titulo.value,
        descricao: $descricao.value
    };

    dadosArmazenados.push(dados);
    localStorage.setItem('dados', JSON.stringify(dadosArmazenados));
    
    $titulo.value = "";
    $descricao.value = "";
    console.log("Dados armazenados:", dadosArmazenados);
}

function mostrar(){
    window.location.href = "./Mostrar/MostrarDados.html"
}