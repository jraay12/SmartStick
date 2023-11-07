import axios from "axios" 
import { useMutation } from "react-query"

const baseUrl = "http://127.0.0.1:8000/api"

const facultyLogin = async (credentials) => {
    return await axios.post(
      `${baseUrl}/login`,
      credentials
    );
  };

  export const MutateLogin = () => {
    return useMutation(facultyLogin);
  };
  