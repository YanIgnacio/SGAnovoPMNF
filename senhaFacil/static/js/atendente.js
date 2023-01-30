function montaTabela(dados) {    
    var corpoTabela = document.getElementById("tbody");
    corpoTabela.innerHTML = '';
    dados.forEach(function(dado) {
        var linha = document.createElement("tr");

        var senha = document.createElement("td");
        senha.innerHTML = dado.senha;
        linha.appendChild(senha);
        
        var cliente = document.createElement("td");
        cliente.innerHTML = dado.cliente;
        linha.appendChild(cliente);
      
        // var status = document.createElement("td");
        // status.innerHTML = dado.status;
        // linha.appendChild(status);

        corpoTabela.appendChild(linha);        
    });    
}
function busca(){
  fetch("/tabela-dados-fila/{{prefixo}}")
        .then(function(response) {
            return response.json();
        })
        .then(function(dados) {
            montaTabela(dados);
        });
    }

busca()
setInterval(function() {
    busca()
}, 10000);