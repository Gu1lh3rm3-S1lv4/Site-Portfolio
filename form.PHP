<?php

$nome = addslashes($_POST["nome"]);
$email = addslashes($_POST["email"]);
$telefone = addslashes($_POST["telefone"]);
$mensagem = addslashes($_POST["mensagem"]);

$para = "guilherme.lsp10@gmail.com";
$assunto = "Coleta de Dados - Portfólio";

$corpo = "nome: ".$nome."\n"."email". $email."\n"."telefone: ".$telefone."\n"."mensagem: ".$mensagem."\n";

$cabeca = "from: guih.bittencourt23@gmail.com"."\n"."reply-to: ".$email."\n"."X=mailer:PHP/".phpversion();

if(mail($para,$assunto,$corpo,$cabeca)){
   echo("E-mail enviado com sucesso");

}else{

    echo("Houve um erro no envio do e-mail");
}

?>
