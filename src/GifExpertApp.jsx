import { useState } from "react";
import AddCategory from "./component/AddCategory";
import GifGrid from "./component/GifGrid";
//import {AddCategory,GifGrid} from "./component/index";



const GifExpertApp = () => {
  const [category, setCategory] = useState(["Batman", "Superman", "Ironman"]);

  const onAddCategory = (newCategory) => {

    if (category.includes(newCategory)) return;

    setCategory((n) => [...n, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory addCategory={(value) => onAddCategory(value)} />

      {category.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};

export default GifExpertApp;
