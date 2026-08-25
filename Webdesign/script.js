let contador = 0;

document.getElementById("Botão").onclick = () => {
contador++;
window.location.href = "index.html";
let toast = document.getElementById("toast")
if (!toast){
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
}

toast.textContent = 'Você clicou ${contador}';
toast.classList.add("show")
};