export const getGifts = async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=qdDVAyoNbX5f3nuOcA9xhnybcV8UyDFI&q=${category}&limit=20`;
    const resp=await fetch(url);
    const {data} = await resp.json();    
    const images=data.map(item => ({
        id:item.id,
        title:item.title,
        image:item.images.downsized_medium.url
    }));

    return images;


}