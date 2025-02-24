import { ButtonFill } from "../Elements/Button";
import { Link } from "react-router-dom";

const CardProduct = ({ children,onClickBtnCart }) => {
  return (
    <div className="min-w-0 p-4 text-white bg-green-800 rounded-lg shadow-xs flex flex-col justify-between">
      {children}
      <div className="grid gap-6 md:grid-cols-2">
        <ButtonFill
          color="bg-white active:bg-green-800 hover:bg-green-900 hover:text-white"
          textColor="text-green-800"
        >
          Book Now
        </ButtonFill>
        <ButtonFill
          onClick={onClickBtnCart}
          color="bg-white active:bg-green-800 hover:bg-green-900 hover:text-white"
          textColor="text-green-800"
        >
          Add To Cart
        </ButtonFill>
      </div>
    </div>
  );
};
const Description = ({ children }) => {
  return <p className="text-justify h-full">{children}</p>;
};
const TitlePrice = ({ title, price }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <h4 className="min-w-0 my-4 font-semibold">{title}</h4>
      <h4 className="min-w-0 my-4 font-semibold text-right">
        Rp. {price.toLocaleString("id-ID")}
      </h4>
    </div>
  );
};
const Photos = ({ src }) => {
  return (
    <Link to="">
      <img
        src={src}
        alt="product"
        className="rounded-t-lg w-2xl h-60 object-cover"
      />
    </Link>
  );
};
CardProduct.TitlePrice = TitlePrice;
CardProduct.Photos = Photos;
CardProduct.Description = Description;
export default CardProduct;
