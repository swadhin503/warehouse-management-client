import { useEffect, useState } from "react";

const useItems = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('https://mighty-beach-33960.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return [items,setItems];
}

export default useItems;
