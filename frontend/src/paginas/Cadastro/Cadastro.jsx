import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Areacadastro, Cadastro1, Form } from './Style'

function Cadastro() {


    return (

        <Areacadastro>
            <Cadastro1>
                <Form onSubmit={handleSubmit}>
                    <div className="title">
                        <h1>CADASTRO</h1>
                    </div>
                    <label>Nome Usuario</label>
                    <input
                    type="text"
                    name="nomeCompleto"
                    placeholder=" Confirmação da Senha"

                    />
                    <input type="text" name="email" placeholder="Email" autoFocus />
                    <input type="password" name="senha" placeholder=" Senha" />
                    <input
                        type="password"
                        name="confirmesenha"
                        placeholder=" Confirmação da Senha"
                    />
                    <button type="submit" value="Finalizar" id="botao"> Cadastrar </button>
                </Form>
            </Cadastro1>
        </Areacadastro>
    )
}

export default Cadastro;
