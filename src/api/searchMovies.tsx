import { discoverEndpoint, searchEndpoint} from "../modules/movies.modules.ts";
import axios from "axios";
 
 const searchMovies = async (query: string, currentPage?: number, yearFilter?: number, typeFilter?: string ) => {
  try {
    const response = await axios.get(query ? searchEndpoint : discoverEndpoint, {
      params: {
        query,
        currentPage,
        year: yearFilter,
        type: typeFilter,
      },
    });
    const { results } = response.data;
    return results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export default searchMovies;