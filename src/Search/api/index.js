import { base_URL } from "./base"
import { area, categories, random, search_end } from "./endPoints"
// import axios from "axios"

export const getCategories =() =>{

    // call api and return
    let response = fetch(`${base_URL}/${area}`)
 
    return response;

}


export const searchCategories =(item) =>{

    // call api and return
    let response = fetch(`${base_URL}/search.php?s=${item}`)
 
    return response;

}
export const getarea = () =>{
    let response = fetch(`${base_URL}/${area}`)
    return response;
}