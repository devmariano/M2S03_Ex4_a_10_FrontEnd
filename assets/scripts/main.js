function login(event) {
    event.preventDefault(); //evita o comportamento padrao do do form

    // captura os dados digitados
    var email = document.getElementById('login-email').value;
    var senha = document.getElementById('login-senha').value;

    const usuario = {
        email,
        senha
    }
    console.log("Novo Login:"+usuario.email, usuario.senha);
}

function cadastro(event) {
    event.preventDefault(); //evita o comportamento padrao do do form
    
   //captura os dados digitados
   var empresa = document.getElementById('cadastro-empresa').value;
   var cnpj = document.getElementById('cadastro-cnpj').value;
   var responsavel = document.getElementById('cadastro-responsavel').value;
   var telefone = document.getElementById('cadastro-telefone').value;
   var email = document.getElementById('cadastro-email').value;
   var senha = document.getElementById('cadastro-senha').value;

   console.log("Novo Cadastro:"+empresa,cnpj,responsavel,telefone,email,senha);
}
