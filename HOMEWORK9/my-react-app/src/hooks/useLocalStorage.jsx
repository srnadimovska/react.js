import { useState, useEffect } from "react";


function useLocalStorage() {
    const [data, setData] = useState(() => {

    const saved = localStorage.getItem("data")
    return saved ? JSON.parse(saved) : {}
    })

    useEffect(() => {
        if(Object.keys(data).length > 0){
        localStorage.setItem("data", JSON.stringify(data))
    }
    },[data])


    return [data, setData]
}

export default useLocalStorage

