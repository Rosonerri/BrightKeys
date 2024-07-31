import axios from "axios"

const URL: string = "http://localhost:2244/api";

export const createAccount = async (data: any) => {
    try {
        return await axios.post(`${URL}/create-user`, data).then((res: any) => {
            return res.data
        });
    } catch (error) {
        return error
    }
}


export const signInUser = async (data: any) =>{
    try {
        return await axios.post(`${URL}/signin-user`, data).then((res: any) => {
            return res.data;
          });
    } catch (error) {
       return error 
    }
}