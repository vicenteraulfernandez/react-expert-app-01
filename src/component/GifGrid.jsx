
import { useFetchGift } from "../hooks/useFetchGift";
import GifItem from "./GifItem";


const GifGrid = ({category})=>{


    const {images,isLoading}=useFetchGift(category);



    return <>

        <h3>{category}</h3>
        {
            isLoading && (<h1>Loading...</h1>)
        }
        
        <div className="card-grid">

            {
                images.map((image) =>(
                   
                    <GifItem key={image.id} {...image} />
                ))
            }    


            
        </div>

    </>


}

export default GifGrid;