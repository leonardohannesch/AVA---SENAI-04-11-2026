let totalLivros = 0;

function adicionarLivro() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editora = document.getElementById("editora").value;
    let ano = document.getElementById("ano").value;

    if (titulo == "" || autor == "" || editora == "" || ano == "") {
        alert("Preencha todos os campos!");
        return;
    }

    let lista = document.getElementById("lista");

    let livro = document.createElement("li");

    livro.textContent = titulo + " - " + autor + " - " + editora + " - " + ano;

    lista.appendChild(livro);

    totalLivros++;

    document.getElementById("total").textContent = totalLivros;

    alert("Livro adicionado com sucesso!");

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("editora").value = "";
    document.getElementById("ano").value = "";
}