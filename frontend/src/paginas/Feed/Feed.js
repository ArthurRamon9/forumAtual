import { useNavigate } from "react-router-dom"



function Feed(){

    const navigate = useNavigate()

    const goToHome = ()=>{
        navigate('/')
    }

    const goBack =()=>{
        navigate(-1)
    }


    return(

        <>
        Feed
        </>
    )
}

export default Feed 