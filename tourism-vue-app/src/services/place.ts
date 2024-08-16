import axios from "axios";

const API_URL = "http://localhost:8000/api/places";

export const apiPlaceCreate = async (data:any): Promise<any> => {
  try {  
    console.log(data);
    const response = await axios.post(API_URL + "/create", { data });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};