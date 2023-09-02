import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    
    const res = await fetch(`${URL}/${id}`);
  
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }
  
    const data = await res.json();
    
    return data;
  };

export default getCategory;