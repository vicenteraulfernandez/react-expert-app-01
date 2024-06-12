import { useState } from "react";
import PropType from "prop-types";

const AddCategory =({addCategory})=>{


    const[value,setValue]=useState('');


    const changeValue=({target})=>{
        //console.log(evt)
        setValue(target.value)
    }

    const onSubmit=(evt)=>{
        //console.log(evt)
        evt.preventDefault();

        if(value.trim().length===0) return

        
        //addCategory(item => [...item,value])
        addCategory(value.trim());
        setValue('');

    }


    return (
        <form onSubmit={onSubmit}>

            <input type="text" placeholder="Searh for Gifts" onChange={changeValue} value={value} />
            


        </form>
    )


}

AddCategory.propType={
    addCategory:PropType.func.isRequired
}


export default AddCategory;