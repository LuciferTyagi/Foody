import { useEffect ,useState} from "react"
import { LIST_API } from "./constant";

const useRestaurantList = () =>{

    
    useEffect(() =>{
        fetchData();
    },[])


    const fetchData = async () =>{
        const data = await fetch(LIST_API);

        const json  = await data.json();
        console.log(json);
    }
}


export default useRestaurantList;