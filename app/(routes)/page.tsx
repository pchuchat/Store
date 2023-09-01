import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Billboard  from "@/components/billboard";
import ProductList from "@/components/product-list";



export const revalidate = 0;


const HomePage =async () => {
    const products = await getProducts({isFeatured: true});
    const billboard = await getBillboard("3ad6c685-40c4-42af-a8a8-d0fe7a90009b");
    return ( 
        <Container>
            <div className="space-y-10 pd-10">
             <Billboard data={billboard} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title = "Featured Products" items={products} />
            </div>
        </Container>
     );
}
 
export default HomePage;
