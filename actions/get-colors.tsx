import {Color} from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    
    const res = await fetch(URL);
  
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }
  
    const data = await res.json();
    
    return data;
  };

export default getColors;