function addContact() {
    // Obter os valores do formulário
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    // Validar se ambos os campos foram preenchidos
    if (name === "" || phone === "") {
    alert("Por favor, preencha todos os campos.");
    return;
    }

    // Criar uma nova linha na tabela
    var table = document.getElementById("contactsTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Inserir células na nova linha
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Adicionar os valores do formulário às células
    cell1.innerHTML = name;
    cell2.innerHTML = phone;

    // Limpar os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}