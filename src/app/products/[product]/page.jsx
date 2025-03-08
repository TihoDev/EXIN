import HeaderSingleProduct from "@/components/Header/HeaderSingleProduct"
import SingleProductTitle from "@/components/singleProduct/SingleProductTitle"
import ProductDetailsSection from "@/components/singleProduct/ProductDetailsSection"
import ProductDescription from "@/components/singleProduct/ProductDescription"
import ProductOfferingSection from "@/components/singleProduct/ProductOfferingSection"

function page() {
    return (
        <div className="overflow-y-hidden">
            <HeaderSingleProduct />
            <SingleProductTitle title="عنوان قالب"/>
            <ProductDetailsSection />
            <ProductDescription />
            {/* more product images section => now we don't build it */}
            <ProductOfferingSection />
        </div>
    )
}
 
export default page
