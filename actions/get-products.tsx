import { Product } from "@/types";
import qs from "query-string"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}


const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId:  query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        },
    });

    const res = await fetch(URL);
  
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }
  
    const data = await res.json();
    
    return data;
  };

  export default getProducts;