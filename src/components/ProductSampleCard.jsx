import Link from "next/link";
import BaseIcon from "./icon/BaseIcon";
import notFountProductImg from "../../public/images/Checker.png";

const ProductSampleCard = ({
  title = "title",
  text = "description",
  imageId,
}) => {
  return (
    <div className="w-full rounded-4xl max-h-[344px] flex flex-col shadow-[0px_2px_4px_0px_#1E132840]">
      <div className="h-1/2">
        <img
          src={imageId || notFountProductImg}
          alt={imageId ? `product image` : `this product does not have image`}
          className="object-cover w-full h-full rounded-tl-4xl rounded-tr-4xl"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl leading-9 mb-2"> {title}</h1>
          <p className="font-normal text-base leading-6">{text}</p>
        </div>
        <div className="mr-auto bg-white w-12 h-12 shadow-md rounded-2xl mt-2">
          <Link href="#">
            <button className="cursor-pointer w-full h-full flex items-center justify-center">
              <BaseIcon id="Arrow" size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductSampleCard;
