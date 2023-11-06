import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../paginas/Login/Login.jsx"
import Feed from "../paginas/Feed/Feed"
import Erro from "../paginas/Erro/Erro"
import Forum from "../paginas/Forum/Forum.jsx"
import Cadastro from "../paginas/Cadastro/Cadastro.jsx"



function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Cadastro />}/>
                <Route path="login" element={<Login/>}/>
                <Route path="feed" element={<Feed/>}/>
                <Route path="Forum" element={<Forum/>}/>
                <Route path="*" element= {<Erro/>}/>


            </Routes>
        </BrowserRouter>
    )
}

export default Rotas