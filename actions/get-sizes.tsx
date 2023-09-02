import {Size} from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    
    const res = await fetch(URL);
  
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }
  
    const data = await res.json();
    
    return data;
  };

export default getSizes;