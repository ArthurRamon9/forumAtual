import { useNavigate } from "react-router-dom"


function Home(){

    const navigate = useNavigate()


    const goToFeed = () =>{
        navigate('/feed')
    }
    return(

        <>
        <button onClick={goToFeed}></button>
        Home
        </>
    )
}

export default Home 