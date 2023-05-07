import axios from "axios";

export const deleteProductApi = async(id) => {
    let responce = await axios.delete(`https://fine-puce-hippo-gown.cyclic.app/product/${id}`)
    return responce.data 
}