import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGift = (category)=>{
  
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async()=>{
        const array= await getGifts(category);
        setImages(array);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages() ;
    },[]);
    


    return {
        images,
        isLoading
    }

} 

