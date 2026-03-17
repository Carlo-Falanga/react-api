import { useEffect, useState } from "react";


export default function AppMain(){

    const url_api = 'https://lanciweb.github.io/demo/api/actresses/'

    const [actresses, setActresses] = useState([])

    function getActresses(){
        fetch(url_api)
        .then(res => res.json())
        .then(data =>{
            setActresses(data)
        })
    }


    useEffect(getActresses,[])
    console.log(actresses);
    

    return(
    <main>

    </main>
    )
}

