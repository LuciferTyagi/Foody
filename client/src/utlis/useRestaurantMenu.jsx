import { useEffect ,useState} from "react";
import { MENU_API } from "./constant";
const  useRestaurantMenu = (restaurantId) => {

   const [resInfo ,setResInfo] = useState(null);
   
       //fetch data
    useEffect(()=>{

        fetchData();

    },[]);


    const fetchData = async () =>{
        const data = await fetch (`${MENU_API}?restaurantId=${restaurantId}`);

        const json  = await data.json();
        
        setResInfo(json.data);
    };

    return resInfo;

}



export default useRestaurantMenu;