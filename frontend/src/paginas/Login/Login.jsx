import React from 'react';

function Login() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="login.css" rel="stylesheet" />
        <title>Login</title>
      </head>
      <body>
        <section className="arealogin">
          <div className="login">
            <div>
              <img src="galp.jpeg" alt="" />
            </div>
            <form method="POST">
              <input
                type="text"
                name="email"
                placeholder=" Email"
                autoFocus
              />
              <input type="password" name="senha" placeholder=" Senha" />
              <input type="submit" value="Entrar" id="botao2" />
            </form>
            <p>
              Não possui cadastro?<a href="index3.html"> Cadastrar</a>
            </p>
          </div>
        </section>
      </body>
    </html>
  );
}

export default Login;
