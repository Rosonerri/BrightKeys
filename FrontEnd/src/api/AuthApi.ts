import axios from "axios"

const URL: string = "http://localhost2233/api";

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
        return await axios.post(`${URL}/signIn-user`, data).then((res: any) => {
          return res.data;
        });
    } catch (error) {
       return error 
    }
}