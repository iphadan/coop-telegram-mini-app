import axios from "axios";

const API_URL = 'http://localhost:8080'; // Make sure to include http://


export const fetchCOB = async (data) => {
      try {
             const response = await axios.post(`${API_URL}/COOP/get-cob-progress`,data)
             console.log(response)
             return response.data
      } catch(error){
        throw error;
      }
};