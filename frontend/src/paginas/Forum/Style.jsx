import styled from 'styled-components'

export const Cabecalho = styled.header`
    background-color: #A38F85;
    color: #fff;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`;

export const TituloForum = styled.h1`
    margin: 0;
    font-size: 28px;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    border-bottom: 2px solid #fff;
    padding: 5px 0;
    margin-right: 45px;
`;

export const Logo = styled.img`
    height: 9%;
    width: 8%;
    margin: 0;
`;

export const OpcoesHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const CadastroLogin = styled.span`
    font-size: 18px;
    cursor: pointer;
    text-decoration: underline;
`;

export const BarraPesquisa = styled.div`
    background-color: #D4B2A7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    box-sizing: border-box;
`;

export const Main = styled.main`
    margin-top: 6%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D9D9D9;
`;

export const PesquisarInput = styled.input`
    width: 30%;
    border-radius: 7px;
    border-color: #D9D9D9;
    border-style: groove;
`;

export const ContainerPublicacoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const Publicacao = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 300px;
`;

export const Autor = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Conteudo = styled.div`
    margin-bottom: 5px;
`;

export const Data = styled.div`
    color: #888;
    font-size: 0.8em;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const InfoUsuario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const FotoUsuario = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FotoUsuarioImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const FormSelect = styled.select`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const FormTextarea = styled.textarea`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const FormSubmitButton = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const SelecaoPublicacao = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
`;

export const LikeButton = styled.button`
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    border: none;
    background-color: transparent;
`;

export const DislikeButton = styled.button`
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    border: none;
    background-color: transparent;
`;

export const DeleteButton = styled.button`
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    border: none;
    background-color: transparent;
`;

export const LikeButtonSelecionado = styled(LikeButton)`
    background-color: #27f048;
    color: #fff;
    border-radius: 5px;
    margin-top: 10px;
`;

export const DislikeButtonSelecionado = styled(DislikeButton)`
    background-color: #ff0a0a;
    color: #fff;
    border-radius: 5px;
    margin-top: 10px;
`;